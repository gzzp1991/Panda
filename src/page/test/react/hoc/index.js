import React from 'react';
import Hoc1 from './hoc1';
import Hoc2 from './hoc2';

class TestReactHoc extends React.PureComponent {
  render() {
    return (
      <div className="test-react-hoc">
        <Hoc1 />
        <Hoc2 />
      </div>
    );
  }
}

export default TestReactHoc;
