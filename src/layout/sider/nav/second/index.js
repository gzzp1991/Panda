import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';
import { routerInfo } from 'src/router';
import Icon from 'component/icon';
import './index.less';

class LayoutSiderNavSecond  extends PureComponent {
  render() {
    const { second = {}, children, path } = this.props;

    return (
      <div className="layout-sider-nav-second active">
        <Link className="layout-sider-nav-second-header now" to={path}>
          {second.name}
        </Link>
        {children && children}
      </div>
    );
  }
}

export default LayoutSiderNavSecond;
