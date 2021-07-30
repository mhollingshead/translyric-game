import React from "react"

class Timer extends React.Component {
    state = {
        seconds: 30,
        points: 0,
        message: null
    };

    time = setInterval(() => {
        this.setState({
            seconds: (this.state.seconds - 1)
        })
    }, 1000)

    click = () => {
        let time = this.state.seconds
        let points = time * 10
        this.setState({
            points: points
        })
    }

    componentDidMount() {
        return this.time;
    }

    componentDidUpdate() {
        if (this.state.seconds === 0) {
            clearInterval(this.time)
        }
        else if (this.state.points !== 0) {
            clearInterval(this.time)
        }
    }
    render() {
        return (
            <>
                <h2>{this.state.seconds}</h2>
                <h2>{`Points ${this.state.points}`}</h2>
                <button onClick={this.click}>Click Me</button>
            </>
        )
    }
}

export default Timer;
