import { Component } from 'react';
import { getLyrics, translateLyrics } from '../../helpers/lyrics';
import { shuffle } from '../../helpers/utils';
import Round from '../../components/Round';
import Results from '../../components/Results';
import Lives from '../../components/Lives';
import categories from '../../data/categories.json';
import './Game.scss';
const langs = [
    {language: 'de', flag: '🇩🇪'},
    {language: 'zh', flag: '🇨🇳'}, 
    {language: 'ja', flag: '🇯🇵'}, 
    {language: 'ko', flag: '🇰🇷'}, 
    {language: 'ru', flag: '🇷🇺'}, 
    {language: 'hi', flag: '🇮🇳'}
];
// {language: 'es', flag: '🇪🇸'}, {language: 'it', flag: '🇮🇹'}, {language: 'fr', flag: '🇫🇷'},

export default class Game extends Component {
    state = {
        song: null,
        songs: [],
        originalLyrics: [],
        translatedLyrics: [],
        languages: [],
        points: 0,
        result: false,
        message: {},
        lives: 3
    }
    // makes the API calls and sets the state for the game logic
    getRoundLyrics(song) {
        // Get 2 random languages for translation
        const languageOrder = shuffle([...langs]).splice(0, 2);
        // Update state with language, song information
        this.setState({ languages: languageOrder, song: song });
        // First API call get's the song lyrics
        getLyrics(song.artist.replaceAll(" ", "%20"), song.title.replaceAll(" ", "%20"))
            .then(res => {
                // Get's rid of unwanted characters and converts to an 8-line array
                const lyricBar = res.data.mus[0].text.replaceAll("?", "'").replaceAll("''", "',").replaceAll("-", " ").split("\n");
                const lyricArr = lyricBar.splice(Math.floor(Math.random() * (0.5 * lyricBar.length)), 8)
                const barText = lyricArr.join(" \n ");
                this.setState({ originalLyrics: lyricArr })
                // Four translate API calls are chained
                // The first is english -> random language 1
                return translateLyrics(barText, "en", languageOrder[0].language);
            })
            // then random language 1 -> random language 2
            .then (res => translateLyrics(res.data.translatedText.replaceAll('\n', ' \n '), languageOrder[0].language, languageOrder[1].language))
            // random language 2 -> back to english
            .then(res => translateLyrics(res.data.translatedText.replaceAll('\n', ' \n '), languageOrder[1].language, "en"))
            // update state with the translated lyric array
            .then(res => this.setState({ translatedLyrics: res.data.translatedText.split("\n") }))
            .catch(e => console.log(e));
    }
    componentDidMount() {
        // get the song list for the given category and shuffle
        let songs = shuffle([...categories.find(c => c.category === this.props.match.params.category).songs]);
        // choose a random song to start
        const firstSong = songs[Math.floor(Math.random() * songs.length)];
        // set state.songs with filtered song array
        this.setState({ songs: songs.filter(song => song.title !== firstSong.title) });
        // make the API calls / update state to begin the first round
        this.getRoundLyrics(firstSong);
    }
    // check the player's guess and update the score
    checkResults = guess => {
        // convert the artist / title to lowercase, remove spaces, 's, .s, etc...
        const artist = this.state.song.artist.toLowerCase().replaceAll(" ", "").replaceAll("'", "").replaceAll(".", "");
        const title = this.state.song.title.toLowerCase().replaceAll(" ", "").replaceAll("'", "").replaceAll(".", "");
        // update points / result message for a winning round
        if (guess.artist === artist && guess.title === title) {
            // correct artist and title, + 500 points + secondsRemaining * 10 bonus points
            this.setState({ points: this.state.points + 600 + guess.bonus, result: true, message: { text: "Correct!", pointChange: 600, bonus: guess.bonus } });
        } else {
            // correct artist only, + 150 points, lives--
            if (guess.artist === artist) this.setState({ points: this.state.points + 150, result: true, lives: this.state.lives - 1, message: { text: "Almost!", pointChange: 150, bonus: 0 } });
            // correct title only, + 150 points, lives--
            if (guess.title === title) this.setState({ points: this.state.points + 150, result: true, lives: this.state.lives - 1, message: { text: "Almost!", pointChange: 150, bonus: 0 } });
            // completely incorrect, lives--
            if (guess.artist !== artist && guess.title !== title) this.setState({ result: true, lives: this.state.lives - 1, message: { text: "Try Again!", pointChange: 0, bonus: 0 } });
            // if player out of lives, encode score for gameover url param and end game
            if (this.state.lives === 0) {
                // score is multiplied by a random number and later divided by it in gameover page
                const encoder = Math.floor(Math.random() * 12 + 1);
                window.location = `/gameover/${this.props.match.params.category}/${this.state.points * encoder}a${encoder}`;
                return;
            }
        }
    }
    // from results page, continue to next round
    nextRound = () => {
        // if no more songs left refill the array
        if (this.state.songs.length === 0) {
            // score is multiplied by a random number and later divided by it in gameover page
            const encoder = Math.floor(Math.random() * 12 + 1);
            window.location = `/gameover/${this.props.match.params.category}/${this.state.points * encoder}a${encoder}`;
            return;
        }
        // pick the new song from the array randomly
        const newSong = this.state.songs[Math.floor(Math.random() * this.state.songs.length)];
        // update the state with the filtered song array, reset round values
        this.setState({ songs: this.state.songs.filter(song => song.title !== newSong.title), result: false, translatedLyrics: [], message: {} });
        // do API calls / game logic for new song
        this.getRoundLyrics(newSong);
    }

    render() {
        return (
          <div className="game" style={{filter: `hueRotate(${Math.floor(Math.random() * 720) - 360}deg)`}}>
            <div className="game__content">
                <div className="game__head">
                    <div className="game__game-score">
                        <h3 className="game__label">Score:&nbsp;</h3>
                        <span className="game__score">{this.state.points}</span>
                    </div>
                    {this.state.message.text && (<div className="game__result">
                        <span className="result__message">{this.state.message.text}</span>
                        { this.state.message.pointChange > 0 && <span className="result__points">{`+${this.state.message.pointChange}`}</span> }
                        { this.state.message.bonus > 0 && <span className="result__bonus">{`(+${this.state.message.bonus} Bonus)`}</span> }
                    </div>)}
                    <div className="game__lives">
                        <Lives lives={this.state.lives}/>
                    </div>
                </div>
                { 
                    this.state.translatedLyrics.length > 0 
                        // either show new round, round results, or loading animation while we wait for the APIs
                        ? (this.state.result
                            ? <Results originalLyrics={this.state.originalLyrics} translatedLyrics={this.state.translatedLyrics} languages={this.state.languages} song={this.state.song} nextRound={this.nextRound} message={this.state.message} />
                            : <Round translatedLyrics={this.state.translatedLyrics} checkResults={this.checkResults} />)
                        : <div className="loading"><div className="loading__icon">↺</div><div className="loading__text">Loading...</div></div>
                }
            </div>
          </div>
        );
    }
}