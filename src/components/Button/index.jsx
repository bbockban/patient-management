import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './styles.scss';

const Button = ({ className = '', children = null, ...buttonProps }) => (
  <button className={classnames('button', className)} {...buttonProps}>
    {children}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
