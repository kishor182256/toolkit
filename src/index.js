
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import 'antd/dist/antd.css';
import { BrowserRouter as Router } from 'react-router-dom';


import App from './App';
import { Provider } from 'react-redux';
import store from './app/store';


ReactDOM.render(
  <Router>
  <Provider store={store}>
  <App/>
  </Provider>
  </Router>,
  document.getElementById('root'),
);
