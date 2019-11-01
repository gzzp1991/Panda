import React, { PureComponent } from 'react';
import classnames from 'classnames';
// import * as R from 'ramda';
import Fold from './fold';
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
    const { children, isFold, updateFold } = this.props;

    return (
      <div className={classnames('layout-content', { 'layout-content-isfold': isFold })}>
        {children}
        <Fold isFold={isFold} updateFold={updateFold} />
      </div>
    );
  }
}

export default LayoutContent;
