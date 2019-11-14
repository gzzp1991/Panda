import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Layout from 'src/layout';
import routerInfo from './info';

const transRouter = (routerInfo = {}, url) => {
  const keys = Object.keys(routerInfo);

  if (keys.length === 0) {
    return null;
  }

  return (
    <Switch>
      {keys.map(k => {
        const { component: Farther, child } = routerInfo[k];
        return (
          <Route
            key={k}
            path={`${url}/${k}`}
            render={({ match: { url } }) => (
              <Farther>{transRouter(child, url)}</Farther>
            )}
          />
        );
      })}
    </Switch>
  );
};

export default () => (
  <BrowserRouter>
    <Route
      path="/"
      render={() => <Layout>{transRouter(routerInfo, '')}</Layout>}
    />
  </BrowserRouter>
);
