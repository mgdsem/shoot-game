import React from 'react';

const Button = ({
    onClick,
    children
}) => (
        <div>
            <button className="button" onClick={onClick}>{children}</button>
        </div>
    );

export default Button;