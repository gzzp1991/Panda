import React, { PureComponent } from 'react';
import { routerInfo } from 'src/router';
import classnames from 'classnames';
import './index.less';

class LayoutSiderRadio  extends PureComponent {
  onClick = evt => {
    const { onChange } = this.props;
    const radio = evt.target.getAttribute('data-radio');
    onChange(radio);
  };

  render() {
    const { active, radios } = this.props;

    return (
      <div className="layout-sider-radio clear-fix">
        {radios.map((r, i) => {
          const now = routerInfo[r];
          return (
            <div
              key={r}
              className={classnames('layout-sider-radio-item', {
                active: !active ? i === 0 : r === active
              })}
              data-radio={r}
              onClick={this.onClick}>
              {now.name}
            </div>
          );
        })}
      </div>
    );
  }
}

export default LayoutSiderRadio;
