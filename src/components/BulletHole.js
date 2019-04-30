import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import bulletHoleSrc from '../assets/img/bullet-hole.png';

const BulletHole = ({
    index,
}) => {
    const [isVisible, setIsVisible] = useState(false);

    const delay = Math.floor(Math.random() * (3700 - 2000)) + 2000;

    const holeClassName = `bullet-hole bullet-hole__${index} ${isVisible ? `bullet-hole__${index}--is-visible` : ''}`;

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true)
        }, delay);
    }, []);

    return (
        <img alt="bullet hole" src={bulletHoleSrc} className={holeClassName} />
    );
}

BulletHole.propTypes = {
    index: PropTypes.number.isRequired
}

export default BulletHole;