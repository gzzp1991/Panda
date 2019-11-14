import React from 'react';

class UpdateTestSon extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { jse } = this.props;
    if (nextProps.jse === jse) {
      return false;
    }
    return true;
  }

  render() {
    return <div className="test-update">UpdateTestSon</div>;
  }
}

export default UpdateTestSon;
