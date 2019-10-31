import React from 'react';
import { Route, Router, browserHistory } from 'react-router';
import Layout from 'src/layout';
import routerInfo from './info';

const transRouter = (routerInfo = {}) => {
  const keys = Object.keys(routerInfo);

  if (keys.length === 0) {
    return null;
  }

  return (
    keys.map(k => (
      <Route key={k} path={k} component={routerInfo[k].component}>
        {transRouter(routerInfo[k].child)}
      </Route>
    ))
  );
};

export default () => {
  return (
    <Router history={browserHistory} >
      <Route path="/" component={Layout}>
        {transRouter(routerInfo)}
      </Route>
    </Router>
  );
};
