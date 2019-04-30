import React from 'react';

import Pistol from './Pistol';

const Header = () => (
    <div className="header">
        <h1 className="header__title">SHOOT GAME</h1>
        <Pistol />
        <Pistol isRight />
    </div>
);

export default Header;