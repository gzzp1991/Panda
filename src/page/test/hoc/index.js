import React from 'react';
import PropsProxy from './propsProxy';
import ReverseInherit from './reverseInherit';

class TestHoc extends React.PureComponent {
  render() {
    return (
      <div className="test-hoc">
        TestHoc
        <PropsProxy />
        <ReverseInherit />
      </div>
    );
  }
}

export default TestHoc;
