import React, { Component } from 'react';

import BeforeGame from './BeforeGame';
import InProgress from './InProgress';

class Game extends Component {
    constructor(props) {
        super(props);

        this.onStartGame = this.onStartGame.bind(this);
        this.onEndGame = this.onEndGame.bind(this);

        this.state = {
            currentGameStatus: 'inProgress',
            player1: 'Magda',
            player2: 'Lukasz',
            winner: ''
        }
    }

    onStartGame(player1, player2) {
        this.setState({
            currentGameStatus: 'inProgress',
            player1: player1,
            player2: player2
        });
    }

    onEndGame(winner) {
        this.setState({
            winner: winner,
            currentGameStatus: 'endGame'
        })
    }

    render() {
        return (
            <div>
                {this.state.currentGameStatus === 'before' && <BeforeGame onStartGame={this.onStartGame} />}
                {this.state.currentGameStatus === 'inProgress' &&
                    <InProgress
                        player1={this.state.player1}
                        player2={this.state.player2}
                        onEndGame={this.onEndGame}
                    />
                }
                {this.state.currentGameStatus === 'endGame' && <div>placeholder</div>}
            </div>
        )
    }
}

export default Game;