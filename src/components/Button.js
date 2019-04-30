import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
    onClick,
    children
}) => (
        <div>
            <button className="button" onClick={onClick}>{children}</button>
        </div>
    );

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node
}

Button.defaultProps = {
    children: null
}

export default Button;