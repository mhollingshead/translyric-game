import { Component } from 'react';
import './Round.scss';

export default class Round extends Component {
    state = {
        seconds: 0
    };

    time;

    componentDidMount() {
        // setInterval for timer when component mounts
        this.setState({ seconds: 30 });
        this.time = setInterval(() => {
            // if time runs out, clearInterval and advance to round results
            if (this.state.seconds === 1) {
                clearInterval(this.time);
                this.props.checkResults({ artist: "", title: "", bonus: 0 });
            } else {
                // otherwise decrement timer
                this.setState({
                    seconds: (this.state.seconds - 1)
                })
            }
        }, 1000);
    }
    // handle answer submission
    handleFormSubmit = e => {
        e.preventDefault();
        // stop timer
        clearInterval(this.time);
        // advance to roundResults, check player guess and send time bonus
        this.props.checkResults({ 
            artist: e.target.artist.value.toLowerCase().replaceAll(" ", "").replaceAll("'", "").replaceAll(".", ""), 
            title: e.target.title.value.toLowerCase().replaceAll(" ", "").replaceAll("'", "").replaceAll(".", ""), 
            bonus: this.state.seconds * 10
        });
    }

    render() {
        return (
            <section className="round">
                <div className="round__timer">
                    <h2>{this.state.seconds}</h2>
                    <div className="round__bar-wrapper">
                        <div className="round__bar" style={{width: (this.state.seconds/30)*100+"%"}}></div>
                    </div>
                </div>
                <div className="translated">
                    {
                      this.props.translatedLyrics.map((line) => (
                          <div key={Math.random()}>{line}</div>
                      ))
                    }
                </div>
                <form className="form" onSubmit={this.handleFormSubmit}>
                    <input className="form__input" name="title" id="title" placeholder="Title" autoComplete="off"></input>
                    <input className="form__input" name="artist" id="artist" placeholder="Artist" autoComplete="off"></input>
                    <button className="button">SUBMIT</button>
                </form>
            </section>
        );
    }
}