import React, { PureComponent } from 'react';

class RamdaFunction extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div className="ramda-function">{children}</div>
    )
  }
}

export default RamdaFunction;