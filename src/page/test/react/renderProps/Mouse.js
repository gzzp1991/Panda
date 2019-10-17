import React from 'react';

class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pos: {
        x: 1,
        y: 2,
      },
    };
  };

  render() {
    const { children } = this.props;
    const { pos } = this.state;
    return (
      <div className="test-react-render-mouse">
        {children(pos)}
      </div>
    )
  }
}

export default Mouse;