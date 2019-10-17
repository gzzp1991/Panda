import React, { PureComponent } from 'react';

class Js extends PureComponent {
  render() {
    const { children } = this.props;

    return (
      <div className="js">{children}</div>
    )
  }
}

export default Js;
