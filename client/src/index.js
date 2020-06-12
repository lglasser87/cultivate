import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMoneyBill } from '@fortawesome/pro-solid-svg-icons';
import { faCode, faHighlighter } from '@fortawesome/free-solid-svg-icons';

library.add(
  faMoneyBill,
  faCode,
  faHighlighter
  // more icons go here
);

ReactDOM.render(<App />, document.getElementById('root'));
