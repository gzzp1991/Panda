import React from 'react';
import Cat from './Cat';
import Mouse from './Mouse';

class TestReactRenderProps extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static getDerivedStateFromProps(props, state) {
    console.log('derived', props, state);
    return null;
  }

  render() {
    console.log('render');
    return (
      <div className="test-renderProps">
        <Mouse aa={pos => <Cat pos={pos} />} />
      </div>
    );
  }
}

export default TestReactRenderProps;
