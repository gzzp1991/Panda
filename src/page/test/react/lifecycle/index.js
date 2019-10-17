import React from 'react';
import { Button } from 'antd';

class TestReactLifecycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  };

  getSnapshotBeforeUpdate(preProps, preState) {
    console.log('getSnapshotBeforeUpdate ', preProps, preState);
  }

  increase = evt => {
    evt.stopPropagation();
    evt.nativeEvent.stopImmediatePropagation();
    this.setState(state => ({ count: state.count + 1 }));
  };

  render() {
    const { count } = this.state;
    return (
      <div className="test-react-lifecycle">
        <Button onClick={this.increase}>click</Button>
        <div>{count}</div>
      </div>
    )
  }
}

export default TestReactLifecycle;