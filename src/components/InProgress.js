import React, { Component } from 'react';

import Button from './Button';
import LifeBar from './LifeBar';
import shooterLabel from '../assets/img/shooterLabel.png';
import skull from '../assets/img/skull.svg';
import pistol2 from '../assets/img/pistol2.png';
import gunTarget from '../assets/img/gunTarget.png';
import { getRandomNumber } from '../helpers/random';




class InProgress extends Component {
    constructor(props) {
        super(props)

        this.onShoot = this.onShoot.bind(this);
        this.onAfterShoot = this.onAfterShoot.bind(this);

        this.state = {
            player1: '',
            player2: '',
            isPlayer1Active: true,
            player1Points: 50,
            player2Points: 50,
            isGameWon: false
        }
    }

    onShoot() {
        if (this.state.isPlayer1Active) {
            this.onAfterShoot('player2Points');
        } else {
            this.onAfterShoot('player1Points');
        }
    }

    onAfterShoot(playerPoints) {
        this.setState((prevState) => {
            const newPoints = prevState[playerPoints] - getRandomNumber();
            return {
                isPlayer1Active: !prevState.isPlayer1Active,
                [playerPoints]: newPoints,
                isGameWon: newPoints <= 0
            }
        });
    }

    render() {
        console.log(this.state);
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

                <div className={`life-bar__pointer-wrapper ${!this.state.isPlayer1Active ? 'life-bar__pointer-wrapper--switch' : ''}`}>
                    <div className="life-bar__pointer-wrapper__active-div">
                        <img alt="gun" className={`life-bar__pointer ${this.state.isPlayer1Active ? 'life-bar__pointer--is-left' : ''}`} src={pistol2} />
                    </div>
                    <div className="life-bar__pointer-wrapper__unactive-div"></div>
                </div>

                <div className="gun-target__wrapper">
                    <Button onClick={this.onShoot}>
                        <img alt="gun target" className="gun-target" src={gunTarget} />
                        <div className="gun-target__text">die mother*ucker!</div>
                    </Button>
                </div>
            </div>
        );
    }
}

export default InProgress;

