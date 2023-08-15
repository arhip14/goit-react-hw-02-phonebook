import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'; 
import './index.css';
import 'normalize.css'; 

const root = document.getElementById('root');
const rootElement = ReactDOM.createRoot(root);
rootElement.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);