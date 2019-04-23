import React, { Component } from 'react';

import Button from './Button';
import flame from '../assets/img/flame2.png';

class EndGame extends Component {
    constructor(props) {
        super(props);

        this.state = {
            winner: '',
            isTextVisible: false,
            isNameVisible: false
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isTextVisible: true
            })
        }, 100);
        setTimeout(() => {
            this.setState({
                isNameVisible: true
            })
        }, 1000);
    }

    render() {
        return (
            <div className="end-game">
                <div className="end-text__wrapper">
                    <div className={`end-text ${this.state.isTextVisible ? 'end-text--is-visible' : ''}`}>The winner is</div>
                    <div className={`end-text__name ${this.state.isNameVisible ? 'end-text__name--is-visible' : ''}`}>{this.props.winner}</div>
                </div>
                <Button onClick={this.props.onTryAgain}>
                    <div className="end-game__fire-wrapper">
                        <div className="end-game__fire-text">try</div>
                        <img alt="fire" className="end-game__fire-img" src={flame} />
                        <div className="end-game__fire-text">again!</div>
                    </div>
                </Button>
            </div>
        )
    }
}

export default EndGame;

// import React from 'react'

// const EndGame = ({
//     winner
// }) => (
//         <div className="end-game">
//             <div className="end-text__wrapper">
//                 <div className="end-text">The winner is</div>
//                 <div className="end-text__name">{winner}</div>
//             </div>
//         </div>
//     );

// export default EndGame;