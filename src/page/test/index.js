import React, { PureComponent } from 'react';
import s2 from '../ramda';

class Test extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div className="test">
        {children}
      </div>
    )
  }
}

export default Test;

// import * as R from 'ramda';
// import r from './ramda';
// // import React from 'react';
// // import * as ReactDom from 'react-dom';
// // import moment from 'moment';

// // import a from './a';

// // console.log(a);

// // ReactDom.render(<h1>zp</h1>, document.body);

// import { longSub, iterArr, compare, compose } from './util/index';

// function* bool() {
//   yield 1;
//   yield 2;
//   yield 3;
//   yield 4;
//   yield 5;
//   return 6;
// }

// for (let number of bool()) {
//   console.log(number);
// }

// let arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];

// console.log([...new Set(iterArr(arr))].sort((a, b) => a - b));

// function A() {
//   this.a = 1;
// }
// A.prototype.b = 2;

// const a1 = new A();
// const a2 = new A();
// console.log(a1.a, a1.b, 'a' in a1, 'b' in a1);

// function o(num) {
//   return 1 * num;
// }
// function tw(num) {
//   return 2 * num;
// }
// function tr(num) {
//   return 3 * num;
// }
// console.log('compose', compose(o, tw, tr)(2));

// const t1 = 1;
// const t2 = 2;
// const t3 = 3;

// const testDefaultArg = ({ t1 = t1, t2 = t2, t3 = t3 } = {}) => {
//   console.log('t ', t1, t2, t3);
// }

// testDefaultArg({});

// console.log(Number(A));

// longSub('ababegfabab');

// compare('1', '3', '<');