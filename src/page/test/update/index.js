import React from 'react';
import Son from './son';

class TestUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jse: {
        a: {
          b:{
            c: 2,
          }
        }
      },
    };
  };

  componentDidMount() {
    setInterval(() => {
      const { jse } = this.state;
      jse.a.b.c = jse.a.b.c + 1;
      this.setState({ jse });
    }, 1000);
  }

  render() {
    console.log('father render');
    const { jse } = this.state;
    return (
      <div className="test-update">
        TestUpdate
        <Son jse={jse} />
      </div>
    )
  }
}

export default TestUpdate;