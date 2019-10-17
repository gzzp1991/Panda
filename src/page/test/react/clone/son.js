import React from 'react';
import { Button } from 'antd';

class Son extends React.Component {
  render() {
    const { count, add, index } = this.props;
    return (
      <div className="son">
        <span>son-{index} {count}</span>
        <Button onClick={add}>add</Button>
      </div>
    )
  }
}

export default Son;