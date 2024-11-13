import React from 'react';
import classnames from 'classnames';

import './styles.scss'

const Button = ({ className, children, ...buttonProps }) => (
  <button
    className={classnames('button', className)}
    {...buttonProps}
  >
    {children}
  </button>
);

export default Button;