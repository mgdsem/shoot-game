import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from './Input';
import Button from './Button';
import boomSrc from '../assets/img/boom.png';

class BeforeGame extends Component {
    static propTypes = {
        onStartGame: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);

        this.onPlayer1Change = this.onPlayer1Change.bind(this);
        this.onPlayer2Change = this.onPlayer2Change.bind(this);
        this.onBeginGame = this.onBeginGame.bind(this);
        this.onEnter = this.onEnter.bind(this);

        this.state = {
            player1: '',
            player2: '',
            hasError: false
        }
    }

    componentDidMount() {
        document.addEventListener('keyup', this.onEnter);
    }

    componentWillUnmount() {
        document.removeEventListener('keyup', this.onEnter);
    }

    onEnter(e) {
        if (e.code === 'Enter') {
            this.onBeginGame();
        }
    }

    onPlayer1Change(e) {
        this.setState({
            player1: e.target.value,
            hasError: false
        });
    }

    onPlayer2Change(e) {
        this.setState({
            player2: e.target.value,
            hasError: false
        });
    }

    onBeginGame() {
        if (!this.state.player1 || !this.state.player2) {
            return this.setState({
                hasError: true
            });
        }
        this.props.onStartGame(this.state.player1, this.state.player2);
    }

    render() {
        const { player1, player2, hasError } = this.state;

        return (
            <div className="before-game">
                <div className="input__wrapper">
                    <Input
                        labelText="Shooter 1"
                        type="text"
                        id="player1"
                        value={player1}
                        placeholder="1st shooter name"
                        onChange={this.onPlayer1Change}
                    />

                    <Input
                        labelText="Shooter 2"
                        type="text"
                        id="player2"
                        value={player2}
                        placeholder="2nd shooter name"
                        onChange={this.onPlayer2Change}
                        isRight
                    />
                </div>

                <Button onClick={this.onBeginGame}>
                    <div className="boom__wrapper">
                        <img alt="explosion" className="boom" src={boomSrc} />
                        <div className="boom__text">
                            Release the bullet!
                        </div>
                    </div>
                </Button>

                {hasError && <div className="error">You have to fill both name fields!</div>}
            </div>
        );
    }
}

export default BeforeGame;