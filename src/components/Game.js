import React, { Component } from 'react';

import BeforeGame from './BeforeGame';

class Game extends Component {
    constructor(props) {
        super(props);

        this.onStartGame = this.onStartGame.bind(this);

        this.state = {
            currentGameStatus: 'before',
            player1: '',
            player2: ''
        }
    }

    onStartGame(player1, player2) {
        this.setState({
            currentGameStatus: 'inProgress',
            player1: player1,
            player2: player2
        });
    }

    render() {
        return (
            <div>
                <BeforeGame onStartGame={this.onStartGame} />
            </div>
        )
    }
}

export default Game;