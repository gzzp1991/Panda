import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';

import { routerInfo } from 'src/router';
import SiderRadio from './radio';
import SiderNav from './nav';
import './index.less';

class LayoutSider extends PureComponent {
  constructor(props) {
    super(props);
    this.radios = Object.keys(routerInfo);
    this.state = {
      activeRadio: this.radios[0],
    };
  }

  changRadio = radio => {
    this.setState({ activeRadio: radio });
  };

  render() {
    const { activeRadio } = this.state;

    return (
      <div className="layout-sider">
        <SiderRadio active={activeRadio} radios={this.radios} onChange={this.changRadio} />
        <SiderNav path={`/${activeRadio}`} nav={routerInfo[activeRadio].child} />
      </div>
    );
  }
}

export default LayoutSider;
