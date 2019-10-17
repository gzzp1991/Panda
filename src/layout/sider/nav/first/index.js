import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';
import { routerInfo } from 'src/router';
import Icon from 'component/icon';
import './index.less';

class LayoutSiderNavFirst  extends PureComponent {
  render() {
    const { first, children, path } = this.props;

    return (
      <div className="layout-sider-nav-first">
        <Link className="layout-sider-nav-first-header now" to={path}>
          {first.name}
          {first.child && (
            <Icon className="layout-sider-nav-first-header-icon" type="icon-chevron-down" />
          )}
        </Link>
        {children && children}
      </div>
    );
  }
}

export default LayoutSiderNavFirst;
