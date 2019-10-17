import React from 'react';
import logAlways from './always';
import logCompose from './compose';

class RamdaFunction extends React.Component {
  componentDidMount() {
    logAlways();
    logCompose();
  }

  render() {
    return (
      <div className="ramda-function">ramda-function</div>
    )
  }
}

export default RamdaFunction;