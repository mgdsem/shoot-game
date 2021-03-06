import React, { Component } from 'react';

import BeforeGame from './BeforeGame';
import InProgress from './InProgress';
import EndGame from './EndGame';

class Game extends Component {
    constructor(props) {
        super(props);

        this.onStartGame = this.onStartGame.bind(this);
        this.onEndGame = this.onEndGame.bind(this);
        this.onTryAgain = this.onTryAgain.bind(this);

        this.state = {
            currentGameStatus: 'before',
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
            winner,
            currentGameStatus: 'endGame'
        });
    }

    onTryAgain() {
        this.setState({
            currentGameStatus: 'before'
        });
    }

    render() {
        const { player1, player2, winner } = this.state;
        return (
            <div>
                {this.state.currentGameStatus === 'before' && <BeforeGame onStartGame={this.onStartGame} />}
                {this.state.currentGameStatus === 'inProgress' &&
                    <InProgress
                        player1={player1}
                        player2={player2}
                        onEndGame={this.onEndGame}
                    />
                }
                {this.state.currentGameStatus === 'endGame' && (
                    <EndGame
                        winner={winner}
                        onTryAgain={this.onTryAgain}
                    />
                )}
            </div>
        );
    }
}

export default Game;