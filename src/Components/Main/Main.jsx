import React, { Component } from 'react'


export default class Main extends Component{
    state = {
        timer : null,
        counter: 0
    }

    componentDidMount() {
        let timer = setInterval(this.tick, 1000);
        this.setState({timer});
      }
    componentWillUnmount() {
        this.clearInterval(this.state.timer);
      }
    tick = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    }
    render(){
        let { counter } = this.state
        return(
            <div>
                <div>
                    <div>Time</div>
                    <div>{counter}</div>
                </div>
            </div>
        )
    }
}