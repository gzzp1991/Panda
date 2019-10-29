import React, { PureComponent } from 'react';
import { browserHistory } from 'react-router';
import classnames from 'classnames';
import './index.less';

class LayoutSiderThird extends PureComponent {
  onClick = (child, path) => {
    if (!child) {
      browserHistory.push(path);
    }
  };

  render() {
    const { routes, path } = this.props;

    return (
      <div className="layout-sider-third clear-fix">
        {Object.keys(routes).map((r, i) => {
          const now = routes[r];
          return (
            <div
              key={r}
              className={classnames('layout-sider-third-item')}
              data-rcode={r}
              onClick={() => this.onClick(now.child, `${path}/${r}`)}>
              {now.name}
            </div>
          );
        })}
      </div>
    );
  }
}

export default LayoutSiderThird;
