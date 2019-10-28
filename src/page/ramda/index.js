import React, { PureComponent } from 'react';

class Ramda extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div className="ramda">{children}</div>
    )
  }
}

export default Ramda;
