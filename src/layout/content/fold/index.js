import React, { PureComponent } from 'react';
import classnames from 'classnames';
// import * as R from 'ramda';
import Icon from 'component/icon';
import './index.less';

class LayoutContentFold extends PureComponent {
  onClick = () => {
    const { updateFold, isFold } = this.props;
    updateFold(!isFold);
  };

  render() {
    return (
      <Icon className="layout-content-fold color-primary" type="icon-chevron-right" onClick={this.onClick}/>
    );
  }
}

export default LayoutContentFold;
