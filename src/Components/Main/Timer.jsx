import React, { Component } from 'react'


export default class Timer extends Component{
    state = {
        time: 0,
        isOn: false,
        start: 0
    }

    startTimer = () => {
        this.setState({
          isOn: true,
          time: this.state.time,
          start: Date.now() - this.state.time
        })
        this.timer = setInterval(() => this.setState({
          time: Date.now() - this.state.start
        }), 1);
    } 
    componentDidMount(){
        this.startTimer()
    }

    stopTimer = () => {
        this.setState({isOn: false})
        clearInterval(this.timer)
    }
    
    resetTimer = () => {
        this.setState({time: 0, isOn: false})
    }
    render() {

        let start = (this.state.time == 0) ?
            <button onClick={this.startTimer}>start</button> :
            null
        let stop = (this.state.time == 0 || !this.state.isOn) ?
            null :
            <button onClick={this.stopTimer}>stop</button>
        let resume = (this.state.time == 0 || this.state.isOn) ?
            null :
            <button onClick={this.startTimer}>resume</button>
        let reset = (this.state.time == 0 || this.state.isOn) ?
            null :
            <button onClick={this.resetTimer}>reset</button>
            
        return(
            <div>
                <h3>timer: {this.state.time}</h3>
                {start}
                {resume}
                {stop}
                {reset}
            </div>
        )
    }
}