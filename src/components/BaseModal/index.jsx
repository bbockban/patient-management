import React from 'react';
import classnames from 'classnames';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import Close from '@/assets/icons/close.svg?react';

import './BaseModal.scss';

Modal.setAppElement('#root');

const BaseModal = ({
  className,
  onClose,
  children,
  overlayClassName,
}) => {
  const isOpen = useSelector(({ sessionReducer: { modalOpen }}) => modalOpen);

  return (
    <Modal
      className={classnames(
        'modal',
        className,
      )}
      isOpen={isOpen}
      overlayClassName={classnames(
        'modal__overlay',
        overlayClassName,
      )}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick
    >
      <div className="modal__close">
        <Close onClick={onClose} className="modal__close"/>
      </div>
      {children}
    </Modal>
  );
};

export default BaseModal;