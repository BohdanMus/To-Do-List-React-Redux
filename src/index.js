import React from 'react';
import { createRoot } from 'react-dom';
import { Provider } from 'react-redux';

// import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import './index.css'; // Підключаємо стилі Bootstrap
import { store } from './redux/store';

const root = document.getElementById('root');
const reactRoot = createRoot(root);

reactRoot.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
