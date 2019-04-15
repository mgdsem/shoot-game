import React, { Component } from 'react';

import Button from './Button';
import shooterLabel from '../assets/img/shooterLabel.png';


class InProgress extends Component {
    constructor(props) {
        super(props)

        this.state = {
            player1: '',
            player2: ''
        }
    }
    render() {
        return (
            <div>
                <div className="shooter-label__wrapper">
                    <div className="shooter-label__inner-wrapper">
                        <img alt="shooter label" className="shooter-label" src={shooterLabel} />
                        <div className="shooter-label__text">{this.props.player1}</div>
                    </div>

                    <div className="shooter-label__inner-wrapper">
                        <img alt="shooter label" className="shooter-label" src={shooterLabel} />
                        <div className="shooter-label__text">{this.props.player2}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default InProgress;

