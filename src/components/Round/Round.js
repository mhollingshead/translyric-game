import './Round.scss';

export default function Round({ translatedLyrics, checkResults }) {
    const handleFormSubmit = e => {
        e.preventDefault();
        checkResults({ artist: e.target.artist.value, title: e.target.title.value });
    }
    return (
        <section className="round">
            <div className="translated">
                {
                  translatedLyrics.map((line) => (
                      <div key={Math.random()}>{line}</div>
                  ))
                }
            </div>
            <form className="form" onSubmit={handleFormSubmit}>
                <input className="form__input" name="title" id="title" placeholder="Title"></input>
                <input className="form__input" name="artist" id="artist" placeholder="Artist"></input>
                <button className="button">Submit</button>
            </form>
        </section>
    );
}