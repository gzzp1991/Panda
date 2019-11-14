import React from 'react';
import Son from './son';

class TestReactKey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 1,
    };
  }

  componentDidMount() {
    this.setState({
      key: 2,
    });
  }

  render() {
    const { key } = this.state;
    return (
      <div className="test-react-key">
        <Son key={key} />
      </div>
    );
  }
}

export default TestReactKey;
