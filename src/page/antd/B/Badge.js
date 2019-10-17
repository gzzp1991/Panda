import React, { Component } from 'react';
import { Badge } from 'antd';

class badge extends Component {
  onClick = () => {
    console.log('onclick');
  };

  render() {
    return (
      <Badge count={0} showZero />
    )
  }
}

export default badge;