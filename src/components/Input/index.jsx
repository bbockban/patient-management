import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.scss';

const Input = forwardRef(
  (
    {
      className = '',
      placeholder = '',
      type = 'text',
      description = '',
      error = '',
      label = '',
      isTextArea = false,
      ...props
    },
    ref,
  ) => (
    <div className="input__container">
      {label && <span className="input__label">{label}</span>}
      {isTextArea ? (
        <textarea
          {...props}
          ref={ref}
          className={classNames('input input-textarea', {
            'input--error': error,
            className,
          })}
          placeholder={placeholder}
        />
      ) : (
        <input
          {...props}
          ref={ref}
          className={classNames('input', { 'input--error': error, className })}
          type={type}
          placeholder={placeholder}
        />
      )}
      <span
        className={classNames('input__message', {
          'input__message--error': error,
        })}
      >
        {error || description}
      </span>
    </div>
  ),
);

Input.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  description: PropTypes.string,
  error: PropTypes.string,
  label: PropTypes.string,
  isTextArea: PropTypes.bool,
};

export default Input;
