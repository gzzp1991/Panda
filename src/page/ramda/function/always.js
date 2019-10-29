import React, { PureComponent } from 'react';
import * as R from 'ramda';
// import { logFontColour } from 'util/constant';

// const a1 = R.always('11');

// const a2 = R.always(true);

// const a3 = R.always('11')();

// function log() {
//   console.log('%calways', logFontColour);
//   console.log(a1());
//   console.log(a2());
//   console.log(a3);
// }

class RamdaFunctionAlways extends PureComponent {
  render() {
    return (
      <div className="ramda-function-always">
        R.always('11'): {R.always('11')}
        <br/>
        R.always(true): {R.always(true)}
        <br/>
        R.always('11')(): {R.always('11')()}
      </div>
    )
  }
}

export default RamdaFunctionAlways;