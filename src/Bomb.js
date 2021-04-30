import React, {Component} from 'react';

export default class Bomb extends Component {

    constructor(props){
        super();
        this.state = {
            secondsLeft: props.initialCount
        }

    }

    decrement = () => {
        const subValue =  this.state.secondsLeft-1;
        this.setState({
            secondsLeft: subValue
        })
    }

    render() {
        return (
            <div>
                {this.state.secondsLeft === 0? "Boom!" : this.state.secondsLeft + " seconds left before I go boom!" }
                
            </div>
        )
    }
}
