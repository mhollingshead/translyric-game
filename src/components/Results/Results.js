import './Results.scss';

export default function Result({ originalLyrics, translatedLyrics, languages, nextRound, song }) {
    const handleOnClick = () => {
        // proceed to new round
        nextRound();
    }
    return (
        <div className="result">
            <div className="result__head">
                <div>
                    <h2 className="result__title">{song.title}</h2>
                    <p className="result__artist">{song.artist}</p>
                </div>
            </div>
            <div className="original">
                {
                    originalLyrics && originalLyrics.map((line) => (
                        <div key={Math.random()}>{line}</div>
                    ))
                }
            </div>
            <div className="arrow">→</div>
            <div className="translated">
                {
                    translatedLyrics && translatedLyrics.map((line) => (
                        <div key={Math.random()}>{line}</div>
                    ))
                }
            </div>
            <div className="languages">
                <span className="language"><span className="flag">🇺🇸</span>→</span>
                {
                    languages && languages.map((country) => (
                        // show the translation history
                        <span key={Math.random()} className="language"><span className="flag">{country.flag}</span>→</span>
                    ))
                }
                <span className="flag">🇺🇸</span>
            </div>
            <button onClick={handleOnClick} className="button">NEXT ROUND</button>
        </div>
    );
}