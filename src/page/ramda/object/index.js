import React from 'react';
import logProp from './prop';
import logMerge from './merge';
import logLens from './lens';
import logAssoc from './assoc';
import logAssocPath from './assocPath';

class RamdaObject extends React.Component {
  componentDidMount() {
    logProp();
    logMerge();
    logLens();
    logAssoc();
    logAssocPath();
  }

  render() {
    return (
      <div className="ramda-object">ramda-object</div>
    )
  }
}

export default RamdaObject;