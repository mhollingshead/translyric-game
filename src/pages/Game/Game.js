import { Component } from 'react';
import { getLyrics, translateLyrics } from '../../helpers/lyrics';
import Round from '../../components/Round';
import Results from '../../components/Results';
import './Game.scss';
const langs = [
    {language: 'zh', flag: '🇨🇳'}, 
    {language: 'ja', flag: '🇯🇵'}, 
    {language: 'ko', flag: '🇰🇷'}, 
    {language: 'ru', flag: '🇷🇺'}, 
    {language: 'hi', flag: '🇮🇳'}
];

export default class Game extends Component {
    state = {
        song: null,
        songs: [],
        originalLyrics: [],
        translatedLyrics: [],
        languages: [],
        points: 0,
        result: false
    }
    getRoundLyrics(song) {
        this.setState({ song: song });
        const languageOrder = shuffle([...langs]).splice(0, 2);
        this.setState({ languages: languageOrder });
        getLyrics(song.artist.replaceAll(" ", "%20"), song.title.replaceAll(" ", "%20"))
            .then(res => {
                const lyricArr = res.data.mus[0].text.replaceAll("?", "'").replaceAll("''", "',").split("\n");
                const lyricBar = lyricArr.splice(0, 8);
                const barText = lyricBar.join(" \n ");
                this.setState({ originalLyrics: lyricBar })
                return translateLyrics(barText, "en", languageOrder[0].language);
            })
            .then (res => {
                return translateLyrics(res.data.translatedText, languageOrder[0].language, languageOrder[1].language);
            })
            .then(res => {
                return translateLyrics(res.data.translatedText, languageOrder[1].language, "en");
            })
            .then(res => {
                this.setState({ translatedLyrics: res.data.translatedText.split("\n") })
            })
            .catch(e => console.log(e));
    }
    componentDidMount() {
        const category = this.props.match.params.category;
        this.getRoundLyrics({artist: "Drake", title: "Over"});
    }
    
    checkResults = guess => {
        if (guess.artist === this.state.song.artist && guess.title === this.state.song.title) {
            this.setState({ points: this.state.points + 500, result: true });
        } else {
            if (guess.artist === this.state.song.artist) {
                this.setState({ points: this.state.points + 100, result: true });
            }
            if (guess.title === this.state.song.title) {
                this.setState({ points: this.state.points + 100, result: true });
            }
            if (guess.artist !== this.state.song.artist && guess.title !== this.state.song.title) {
                this.setState({ result: true });
            }
        }
    }
    nextRound = () => {
        this.setState({ result: false, translatedLyrics: [] });
        this.getRoundLyrics({artist: "Drake", title: "Over"});
    }

    render() {
        return (
          <div className="App">
            { 
                this.state.translatedLyrics.length > 0 
                    ? (this.state.result
                        ? <Results originalLyrics={this.state.originalLyrics} translatedLyrics={this.state.translatedLyrics} languages={this.state.languages} nextRound={this.nextRound} />
                        : <Round translatedLyrics={this.state.translatedLyrics} checkResults={this.checkResults} />)
                    : <span className="loading">Loading...</span>
            }
          </div>
        );
    }
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }