import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import App from '@/containers/App';

import store from './app/store';

import './index.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
        <App />
        <ToastContainer 
          autoClose={3000}
          closeOnClick
          newestOnTop
          pauseOnHover
          position="top-right"
          icon={false}
        />
    </Provider>
  </StrictMode>,
);
