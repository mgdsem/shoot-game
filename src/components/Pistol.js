import React, { useState } from 'react';
import PropTypes from 'prop-types';

import pistolSrc from '../assets/img/pistol.png';

const Pistol = ({
    isRight
}) => {
    const [isAnimating, setIsAnimating] = useState(false);

    const baseClasses = `pistol ${isRight ? 'pistol--right' : 'pistol--left'}`;
    let animationClass = '';
    if (isAnimating) {
        animationClass = isRight ? 'pistol--right-animated' : 'pistol--left-animated';
    }

    return (
        <button className={`${baseClasses} ${animationClass}`} onClick={() => setIsAnimating(true)} onAnimationEnd={() => setIsAnimating(false)}>
            <img alt="pistol" src={pistolSrc} />
        </button>
    );
}

Pistol.propTypes = {
    isRight: PropTypes.bool
}

Pistol.defaultProps = {
    isRight: false
}

export default Pistol;