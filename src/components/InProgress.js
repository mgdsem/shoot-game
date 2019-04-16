import React, { Component } from 'react';

import Button from './Button';
import LifeBar from './LifeBar';
import shooterLabel from '../assets/img/shooterLabel.png';
import skull from '../assets/img/skull.svg';
import pistol2 from '../assets/img/pistol2.png';
import gunTarget from '../assets/img/gunTarget.png';




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

                <div className="life-bar__wrapper">
                    <LifeBar isLeft />
                    <img alt="skull" className="skull" src={skull} />
                    <LifeBar isRight />
                </div>

                <div className="gun-target__wrapper">
                    <Button>
                        <img alt="gun target" className="gun-target" src={gunTarget} />
                        <div className="gun-target__text">die mother*ucker!</div>
                    </Button>
                </div>
            </div>
        );
    }
}

export default InProgress;

