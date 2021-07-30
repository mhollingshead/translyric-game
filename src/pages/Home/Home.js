import './Home.scss'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <main className="home-page">
            <h1 className="app-name">Translyric!</h1>
            <h2 className="app-slogan">Test your knowledge of popular songs with a
                <span id="h2--bolded"> twist</span>
            </h2>
            <div className="categories">
                <div className="category">
                    <Link to="/game/pop" className="game-path">
                        <h1 className="music-type">✨</h1>
                        <h3 className="music-type-text">Pop</h3>
                        <button className="game-path__button">Play Now</button>
                    </Link>
                </div>
                <div className="category">
                    <Link to="/game/hits-of-2010" className="game-path">
                        <h1 className="music-type">🎸</h1>
                        <h3 className="music-type-text">2010 Hits</h3>
                        <button className="game-path__button">Play Now</button>
                    </Link>
                </div>
            </div>
        </main>
    );
}