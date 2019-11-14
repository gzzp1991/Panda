import React from 'react';

class Cat extends React.PureComponent {
  render() {
    const {
      pos: { x = 'x', y = 'y' },
    } = this.props;
    return <div className="test-react-render-cat">{`x: ${x} y: ${y}`}</div>;
  }
}

export default Cat;
