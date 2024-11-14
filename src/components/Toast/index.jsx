import { toast } from 'react-toastify';

import './styles.scss';

const Toast = (text, type, autoClose = 3000) => {
  toast.dismiss();

  return toast(text, {
    type,
    className: `toast toast--${type}`,
    autoClose,
  });
};

export default Toast;
