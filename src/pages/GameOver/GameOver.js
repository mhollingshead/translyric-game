import { Component } from 'react';
import { Link } from 'react-router-dom';
import './GameOver.scss';

export default class GameOver extends Component {
    state = {
        highscores: [],
        isHighscore: false,
        score: null 
    }
    componentDidMount() {
        // get leaderboard info from url params
        const category = this.props.match.params.category;
        // decode the score 
        const decode = this.props.match.params.id.split('a');
        const score = Number(decode[0]) / Number(decode[1]);
        // get all highscores from localStorage
        const highscores = JSON.parse(localStorage.getItem("highscores") || "[]");
        // check to see if this score is a new high score
        const isHighscore = !highscores.find(pastScore => pastScore.score > score);
        // push new score, update state, update localStorage
        highscores.push({ category: category, score: score });
        this.setState({ highscores: highscores, isHighscore: isHighscore, score: score });
        localStorage.setItem("highscores", JSON.stringify(highscores));
    }
    render () {
        return (
            <main className="game-over">
                <h2 className="game-over__header">Game Over!</h2>
                <div className="game-over__body">
                    <h3 className="game-over__title">Final Score:</h3>
                    {this.state.score && <p className="game-over__score">{this.state.isHighscore ? <span className="highscore">⭐</span> : <></>}{this.state.score}</p>}
                    {this.state.highscores && <div className="leaderboard">
                        <h3 className="game-over__title">Your High Scores:</h3>
                        {
                            this.state.highscores.sort((a, b) => b.score - a.score).map((score, ind) => {
                                // show top 3 scores
                                if (ind < 3) return (
                                    <div className="leaderboard__row" key={Math.random()+ind}>
                                        <div className="leaderboard__score">{score.score}</div>
                                        <div className="leaderboard__category">{score.category.replaceAll("-", " ")}</div>
                                    </div>
                                )
                                else return null
                            })
                        }
                    </div>}
                </div>
                <Link to="/" className="button button--link">PLAY AGAIN</Link>
            </main>
        );
    }
}