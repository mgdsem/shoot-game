import React, { useState, useEffect } from 'react';

import bulletHoleSrc from '../assets/img/bullet-hole.png';

const BulletHole = ({
    index,
}) => {
    const [isVisible, setIsVisible] = useState(false);

    const delay = Math.floor(Math.random() * (3700 - 2000)) + 2000;

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true)
        }, delay);
    }, []);

    return (
        <img alt="bullet hole" src={bulletHoleSrc} className={`bullet-hole bullet-hole__${index} ${isVisible ? `bullet-hole__${index}--is-visible` : ''}`} />
    );
}

export default BulletHole;