import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from 'react-router-dom';

import './index.scss';
import App from './App';

import { getUrl } from './CommonUtil';

const baseURL = getUrl();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={baseURL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
