import React, { PureComponent } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import classnames from 'classnames';
// import * as R from 'ramda';

import './index.less';

// @connect(
//   state => ({
//     operates: state.common.operates,
//   }),
//   dispatch => ({
//     trunkNumberActions: bindActionCreators(trunkNumberActions, dispatch),
//   }),
// )
class DragCode extends PureComponent {
  render() {
    // const { b } = this.props;
    // const { a } = this.state;

    return (
      <div className="drag-code">
        <iframe
          frameBorder="0"
          src="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find"
        />
      </div>
    );
  }
}

export default DragCode;
