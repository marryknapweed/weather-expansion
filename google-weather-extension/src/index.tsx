import React from 'react';
import ReactDOM from 'react-dom/client'
import {App} from './App';
import './index.css';

const rootElement = document.querySelector('#root')
const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
