import './Home.scss'
import { Link } from 'react-router-dom';

export default function Home() {
    const toggleInstructions = () => {
        document.querySelector('.instructions') && document.querySelector('.instructions').classList.toggle('invisible');
    }
    return (
        <main className="home-page">
            <h1 className="app-name">Translyric!</h1>
            <h2 className="app-slogan">Test your knowledge of popular songs with a
                <span id="h2--bolded" onClick={toggleInstructions}> twist<sup>?</sup></span>
            </h2>
            <div className="instructions invisible">
                We'll show you a random section of lyrics from a popular song that have been <b>translated</b> into a random language multiple times before finally being translated back to english. <i>Can you guess the song before time runs out?</i>
                <div className="instructions__sample">
                    {/* You've got a smile that could light up this whole town → Your smile burns the city */}
                </div>
            </div>
            <div className="categories">
                <div className="category">
                    <Link to="/game/pop" className="game-path">
                        <h1 className="music-type">✨</h1>
                        <h3 className="music-type-text">Pop</h3>
                        <button className="game-path__button button">Play Now</button>
                    </Link>
                </div>
                <div className="category">
                    <Link to="/game/hits-of-2010" className="game-path">
                        <h1 className="music-type">🎤</h1>
                        <h3 className="music-type-text">2010 Hits</h3>
                        <button className="game-path__button button">Play Now</button>
                    </Link>
                </div>
                <div className="category">
                    <Link to="/game/rap" className="game-path">
                        <h1 className="music-type">🎵</h1>
                        <h3 className="music-type-text">Rap</h3>
                        <button className="game-path__button button">Play Now</button>
                    </Link>
                </div>
                <div className="category">
                    <Link to="/game/classic-rock" className="game-path">
                        <h1 className="music-type">🎸</h1>
                        <h3 className="music-type-text">Classic Rock</h3>
                        <button className="game-path__button button">Play Now</button>
                    </Link>
                </div>
            </div>
        </main>
    );
}