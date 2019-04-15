import React from 'react';

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
            />
        </div>
    );

export default Input;