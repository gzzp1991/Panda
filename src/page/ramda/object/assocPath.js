import * as R from 'ramda';
import { logFontColour } from 'util/constant';

const targ = { a: { b: { c: 1 } } };
const a1 = R.assocPath(['a', 'b', 'c'], 0, targ);

export default function log() {
  console.log('%cassocPath', logFontColour);
  console.log(a1);
  console.log(a1.a === targ.a);
  // console.log(a1.a.b === targ.a.b);
}