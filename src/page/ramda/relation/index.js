import React from 'react';
import logPropEq from './propEq';
import logEquals from './equals';

class RamdaRelation extends React.Component {
  componentDidMount() {
    logPropEq();
    logEquals();
  }

  render() {
    return (
      <div className="ramda-relation">ramda-relation</div>
    )
  }
}

export default RamdaRelation;