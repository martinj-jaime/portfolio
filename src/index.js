import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {LangProvider} from './context/langContext'

ReactDOM.render(
  <LangProvider>
    <App />
  </LangProvider>  ,

  document.getElementById('root')
);