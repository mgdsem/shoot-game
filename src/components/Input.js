import React from 'react';
import PropTypes from 'prop-types';

import arrow from '../assets/img/arrow.svg';

const Input = ({
    labelText,
    type,
    id,
    value,
    placeholder,
    onChange,
    isRight
}) => (
        <div className={`input__inner-wrapper ${!isRight ? 'input__inner-wrapper--is-left' : ''}`}>
            <label className="input__label" htmlFor={id}>
                <div className="input__label-text">{labelText}</div>
                <img alt="arrow" src={arrow} className={`input__arrow ${isRight ? 'input__arrow--is-right' : ''}`} />
            </label>

            <input
                className="input"
                type={type}
                id={id}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                maxLength={10}
                autoComplete="off"
            />
        </div>
    );

Input.propTypes = {
    labelText: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    isRight: PropTypes.bool
}

Input.defaultProps = {
    isRight: false
}

export default Input;