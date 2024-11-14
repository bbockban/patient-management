import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Modal from 'react-modal';

import Close from '@/assets/icons/close.svg?react';

import './style.scss';

Modal.setAppElement('#root');

const BaseModal = ({
  className = '',
  onClose = () => {},
  children = null,
  overlayClassName = '',
  isOpen = false,
}) => (
  <Modal
    className={classnames('modal', className)}
    isOpen={isOpen}
    overlayClassName={classnames('modal__overlay', overlayClassName)}
    onRequestClose={onClose}
    shouldCloseOnOverlayClick
  >
    <div className="modal__close">
      <Close onClick={onClose} className="modal__close-button" />
    </div>
    {children}
  </Modal>
);

BaseModal.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  children: PropTypes.node,
  overlayClassName: PropTypes.string,
  isOpen: PropTypes.bool,
};

export default BaseModal;
