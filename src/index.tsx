import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <App />
    </Provider>
  </PersistGate>

);
