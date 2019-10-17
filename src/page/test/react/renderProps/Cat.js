import React from 'react';

class Cat extends React.Component {
  render() {
    const { pos: { x = 'x', y = 'y' } } = this.props;
    return (
      <div className="test-react-render-cat">
        {`x: ${x} y: ${y}`}
      </div>
    )
  }
}

export default Cat;