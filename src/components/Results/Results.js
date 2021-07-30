import './Results.scss';

export default function Result({ originalLyrics, translatedLyrics, languages, nextRound }) {
    const handleOnClick = () => {
        nextRound();
    }
    return (
        <div className="result">
            <div className="original">
                {
                    originalLyrics && originalLyrics.map((line) => (
                        <div key={Math.random()}>{line}</div>
                    ))
                }
            </div>
            <div className="translated">
                {
                    translatedLyrics && translatedLyrics.map((line) => (
                        <div key={Math.random()}>{line}</div>
                    ))
                }
            </div>
            <div className="languages">
                <span>🇺🇸→</span>
                {
                    languages && languages.map((country) => (
                        <span key={Math.random()}>{country.flag}→</span>
                    ))
                }
                🇺🇸
            </div>
            <button onClick={handleOnClick} className="button">Next Round</button>
        </div>
    );
}