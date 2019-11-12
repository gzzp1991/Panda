import React, { PureComponent } from 'react';
import classnames from 'classnames';

import routerInfo from 'src/router/info';
import SiderFirst from './first';
import './index.less';

class LayoutSider extends PureComponent {
  render() {
    const { isFold } = this.props;

    return (
      <div
        className={classnames('layout-sider', {
          'layout-sider-isfold': isFold,
        })}>
        <SiderFirst path="" routes={routerInfo} />
      </div>
    );
  }
}

export default LayoutSider;
