import React from 'react';
import logComplement from './complement';
import logCond from './cond';
import logBoth from './both';

class RamdaLogic extends React.Component {
  componentDidMount() {
    logComplement();
    logCond();
    logBoth();
  }

  render() {
    return (
      <div className="ramda-logic">ramda-logic</div>
    )
  }
}

export default RamdaLogic;