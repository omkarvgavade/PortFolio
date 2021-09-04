import React from 'react';
import ReactDOM from 'react-dom';

import { GlobalStyle } from "./Styles/GlobalStyles";
import App from './App';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


