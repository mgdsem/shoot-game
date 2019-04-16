import React from 'react';

const LifeBar = ({
    isLeft,
    isRight
}) => (
        <div>
            <div className="life-bar__inner-wrapper">
                <div className={`life-bar ${isLeft ? 'is-left' : 'is-right'}`}></div>
            </div>
        </div>
    );

export default LifeBar;