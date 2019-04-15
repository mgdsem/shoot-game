import React, { Component } from 'react';

import Input from './Input';
import Button from './Button';
import boomSrc from '../assets/img/boom.png';

class BeforeGame extends Component {
    constructor(props) {
        super(props);

        this.onPlayer1Change = this.onPlayer1Change.bind(this);
        this.onPlayer2Change = this.onPlayer2Change.bind(this);
        this.onBeginGame = this.onBeginGame.bind(this);

        this.state = {
            player1: '',
            player2: ''
        }
    }

    onPlayer1Change(e) {
        this.setState({
            player1: e.target.value
        });
    }

    onPlayer2Change(e) {
        this.setState({
            player2: e.target.value
        });
    }

    onBeginGame() {
        this.props.onStartGame(this.state.player1, this.state.player2);
    }

    render() {
        return (
            <div className="before-game">
                <div className="input__wrapper">
                    <Input
                        labelText="Shooter 1"
                        type="text"
                        id="player1"
                        value={this.state.player1}
                        placeholder="1st shooter name"
                        onChange={this.onPlayer1Change}
                    />

                    <Input
                        labelText="Shooter 2"
                        type="text"
                        id="player2"
                        value={this.state.player2}
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
            </div>
        );
    }
}

export default BeforeGame;