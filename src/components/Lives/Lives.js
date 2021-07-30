import './Lives.scss';

export default function Result({ lives }) {
    return (
        <div className="lives">
            {
                // this can't be the best way to do this but it works for now
                lives === 3
                    ? <><span className="lives__heart">❤️</span><span className="lives__heart">❤️</span><span className="lives__heart">❤️</span></>
                    : (
                        lives === 2
                            ? <><span className="lives__heart lives__heart--gone">❤️</span><span className="lives__heart">❤️</span><span className="lives__heart">❤️</span></>
                            : (
                                lives === 1
                                    ? <><span className="lives__heart lives__heart--gone">❤️</span><span className="lives__heart lives__heart--gone">❤️</span><span className="lives__heart">❤️</span></>
                                    : <><span className="lives__heart lives__heart--gone">❤️</span><span className="lives__heart lives__heart--gone">❤️</span><span className="lives__heart lives__heart--gone">❤️</span></>
                            )
                    )
            }
        </div>
    );
}