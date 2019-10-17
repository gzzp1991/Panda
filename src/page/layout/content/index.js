import React, { PureComponent } from 'react';
import classnames from 'classnames';
// import * as R from 'ramda';
import './index.less';

class LayoutContent extends PureComponent {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     a: 1,
  //   };
  // }

  // add = () => {
  //   this.setState({ isAddVisible: true });
  // };

  render() {
    const { children } = this.props;

    return <div className="layout-content">{children && children}</div>;
  }
}

export default LayoutContent;
