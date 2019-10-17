import React, { PureComponent } from 'react';
import classnames from 'classnames';

import SiderRadio from './radio';
import SiderNav from './nav';
import './index.less';

class LayoutSider extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeRadio: 'ramda',
    };
  }

  render() {
    const { activeRadio } = this.state;

    return (
      <div className="layout-sider">
        <SiderRadio active={activeRadio} />
        {/* <SiderNav /> */}
      </div>
    );
  }
}

export default LayoutSider;
