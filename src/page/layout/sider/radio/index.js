import React, { PureComponent } from 'react';
import { routerInfo } from 'page/router';
import classnames from 'classnames';
import './index.less';

class LayoutSiderRadio  extends PureComponent {
  constructor(props) {
    super(props);
    this.firstRouterKeys = Object.keys(routerInfo);
  }

  // add = () => {
  //   this.setState({ isAddVisible: true });
  // };

  render() {
    const { active } = this.props;
    // const { a } = this.state;

    return (
      <div className="layout-sider-radio">
        {this.firstRouterKeys.map((r, i) => {
          const now = routerInfo[r];
          return (
            <div
              className={classnames('layout-sider-radio-item', {
                active: !active ? i === 0 : r === active
              })}
              key={r}>
              {now.name}
            </div>
          );
        })}
      </div>
    );
  }
}

export default LayoutSiderRadio;
