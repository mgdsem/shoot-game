import React from 'react';

const LifeBar = ({
    isLeft,
    playerPoints
}) => {
    const points = playerPoints < 0 ? 0 : playerPoints
    const barWidth = `${(points * 10) / 5}%`;
    let color = '#5e8c6a';

    if (playerPoints < 30) {
        color = '#edc951';
    }
    if (playerPoints < 10) {
        color = '#2b1d0e';
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

export default LifeBar;