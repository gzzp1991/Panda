import React, { PureComponent } from 'react';

class Echarts extends PureComponent {
  render() {
    const { children } = this.props;

    return <div className="echarts">{children}</div>;
  }
}

export default Echarts;
