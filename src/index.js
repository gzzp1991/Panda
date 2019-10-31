import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import store from 'rdx/store';
import Router from './router';

ReactDom.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
);