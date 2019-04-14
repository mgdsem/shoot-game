import React from 'react';

import pistolSrc from '../assets/img/pistol.png';

const Header = () => (
    <div className="header">
        <h1 className="header__title">SHOOT GAME</h1>
        <img className="pistolImg pistolImg--right" alt="Gun" src={pistolSrc} />
        <img className="pistolImg pistolImg--left" alt="Gun" src={pistolSrc} />
    </div>
);

export default Header;