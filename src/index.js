import React from 'react';
import ReactDom from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import store from './rdx/store';
import routes from './router';

ReactDom.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);