import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from './Button';
import flame from '../assets/img/flame2.png';
import BulletHole from './BulletHole';

class EndGame extends Component {
    static propTypes = {
        winner: PropTypes.string.isRequired,
        onTryAgain: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);

        this.onEnter = this.onEnter.bind(this);

        this.state = {
            winner: '',
            isTextVisible: false,
            isNameVisible: false
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isTextVisible: true
            })
        }, 100);
        setTimeout(() => {
            this.setState({
                isNameVisible: true
            })
        }, 1000);
        document.addEventListener('keyup', this.onEnter);
    }

    componentWillUnmount() {
        document.removeEventListener('keyup', this.onEnter);
    }

    onEnter(e) {
        if (e.code === 'Enter') {
            this.props.onTryAgain();
        }
    }

    render() {
        return (
            <div className="end-game__wrapper">
                <div className="holes-wrapper">
                    <BulletHole index={1} />
                    <BulletHole index={2} />
                </div>

                <div className="end-game">
                    <div className="end-text__wrapper">
                        <div className={`end-text ${this.state.isTextVisible ? 'end-text--is-visible' : ''}`}>The winner is</div>
                        <div className={`end-text__name ${this.state.isNameVisible ? 'end-text__name--is-visible' : ''}`}>{this.props.winner}</div>
                    </div>

                    <Button onClick={this.props.onTryAgain}>
                        <div className="end-game__fire-wrapper">
                            <div className="end-game__fire-text">try</div>
                            <img alt="fire" className="end-game__fire-img" src={flame} />
                            <div className="end-game__fire-text">again!</div>
                        </div>
                    </Button>
                </div>

                <div className="holes-wrapper">
                    <BulletHole index={3} />
                    <BulletHole index={4} />
                    <BulletHole index={5} />
                </div>

            </div>
        )
    }
}

export default EndGame;
