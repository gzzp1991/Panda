import React, { PureComponent } from 'react';
import classnames from 'classnames';

import { routerInfo } from 'src/router';
import SiderHead from './head';
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
    const { isFold } = this.props;
    const { activeRadio } = this.state;

    return (
      <div className={classnames('layout-sider', { 'layout-sider-isfold': isFold })}>
        <SiderRadio active={activeRadio} radios={this.radios} onChange={this.changRadio} />
        <SiderNav path={`/${activeRadio}`} nav={routerInfo[activeRadio].child} />
        <SiderHead />
      </div>
    );
  }
}

export default LayoutSider;
