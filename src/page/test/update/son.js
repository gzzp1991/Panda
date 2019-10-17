import React from 'react';

class UpdateTestSon extends React.Component {
  componentWillReceiveProps(nextProps) {
    console.log('son recieve');
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.jse === this.props.jse) {
      return false;
    }
    return true;
  }

  render() {
    console.log('son render', this.props.jse.a.b.c);
    return (
      <div className="test-update">
        UpdateTestSon
      </div>
    )
  }
}

export default UpdateTestSon;