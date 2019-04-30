import React from 'react';
import PropTypes from 'prop-types';

import { green, yellow, brown } from '../helpers/colors';

const LifeBar = ({
    isLeft,
    playerPoints
}) => {
    const points = playerPoints < 0 ? 0 : playerPoints;
    const barWidth = `${(points * 10) / 5}%`;
    let color = green;

    if (playerPoints < 30) {
        color = yellow;
    }
    if (playerPoints < 10) {
        color = brown;
    }

    return (
        <div>
            <div className="life-bar__inner-wrapper">
                <div
                    style={{
                        width: barWidth,
                        backgroundColor: color
                    }}
                    className={`life-bar ${isLeft ? 'life-bar--is-left' : 'life-bar--is-right'}`}
                />
            </div>
        </div>
    );
}

LifeBar.propTypes = {
    isLeft: PropTypes.bool,
    playerPoints: PropTypes.number.isRequired
}

LifeBar.defaultProps = {
    isLeft: false
}

export default LifeBar;