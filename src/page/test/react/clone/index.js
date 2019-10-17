import React from 'react';
import Father from './father';
import Son from './son';

class TestReact extends React.Component {
  son1 = React.createRef();

  son2 = React.createRef();

  componentDidMount() {
    console.log('son1 ', this.son1.current);
    console.log('son2 ', this.son2.current);
  }

  componentDidUpdate() {
    console.log('son1 ', this.son1.current);
    console.log('son2 ', this.son2.current);
  }

  render() {
    return (
      <div className="test-react">
        <Father>
          <Son index="1" ref={this.son1} />
          <Son index="2" ref={this.son2} />
        </Father>
      </div>
    )
  }
}

export default TestReact;