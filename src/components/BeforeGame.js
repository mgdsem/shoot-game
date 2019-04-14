import React, { Component } from 'react';

import Input from './Input';
import Button from './Button';

import boom from '../assets/img/boom.png';


class BeforeGame extends Component {
    constructor(props) {
        super(props);

        this.onInput1Change = this.onInput1Change.bind(this);
        this.onInput2Change = this.onInput2Change.bind(this);
        this.onBeginGame = this.onBeginGame.bind(this);

        this.state = {
            player1: '',
            player2: ''
        }
    }

    onInput1Change(e) {
        this.setState({
            player1: e.target.value
        });
    }

    onInput2Change(e) {
        this.setState({
            player2: e.target.value
        });
    }

    onBeginGame() {
        this.props.onStartGame(this.state.player1, this.state.player2);
    }

    render() {
        console.log(this.state);
        return (
            <div className="before-game">
                <div className="input__wrapper">
                    <Input
                        labelText="Shooter 1"
                        type="text"
                        id="player1"
                        value={this.state.player1}
                        placeholder="1st shooter name"
                        onChange={this.onInput1Change}
                    />
                    <Input
                        labelText="Shooter 2"
                        type="text"
                        id="player2"
                        value={this.state.player2}
                        placeholder="2nd shooter name"
                        onChange={this.onInput2Change}
                        isRight
                    />
                </div>
                <Button onClick={this.onBeginGame}>
                    <div className="boom__wrapper">
                        <img alt="eplosion" className="boom" src={boom} />
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