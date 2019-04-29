import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from './Button';
import LifeBar from './LifeBar';
import shooterLabel from '../assets/img/shooterLabel.png';
import skull from '../assets/img/skull.svg';
import pistol2 from '../assets/img/pistol2.png';
import gunTarget from '../assets/img/gunTarget.png';
import { getRandomNumber } from '../helpers/random';

class InProgress extends Component {
    static propTypes = {
        player1: PropTypes.string.isRequired,
        player2: PropTypes.string.isRequired,
        onEndGame: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this.onShoot = this.onShoot.bind(this);
        this.onAfterShoot = this.onAfterShoot.bind(this);
        this.onEnter = this.onEnter.bind(this);

        this.state = {
            isPlayer1Active: true,
            player1Points: 50,
            player2Points: 50,
            isGameWon: false,
            winner: ''
        }
    }

    componentDidMount() {
        document.addEventListener('keyup', this.onShoot);
    }

    componentDidUpdate(prevProps, prevState) {
        if (!prevState.isGameWon && this.state.isGameWon) {
            this.props.onEndGame(this.state.winner);
        }
    }

    componentWillUnmount() {
        document.removeEventListener('keyup', this.onShoot);
    }

    onEnter(e) {
        if (e.code === 'Enter') {
            this.onShoot();
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
            const isGameWon = newPoints <= 0;
            let winner = '';
            if (isGameWon) {
                winner = prevState.isPlayer1Active ? this.props.player1 : this.props.player2;
            }

            return {
                isPlayer1Active: !prevState.isPlayer1Active,
                [playerPoints]: newPoints,
                isGameWon: isGameWon,
                winner: winner
            }
        });
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
                    <LifeBar playerPoints={this.state.player1Points} isLeft />
                    <img alt="skull" className="skull" src={skull} />
                    <LifeBar playerPoints={this.state.player2Points} isRight />
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

