import * as R from 'ramda';
import { logFontColour } from 'util/constant';

const e1 = R.equals(1, 1);
const e2 = R.equals(1, '1');
const e3 = R.equals([{}], [{}]);
const e4 = R.equals([1, 2, {a: {}}], [1, 2, {a: {}}]);

export default function log() {
  console.log('%cequals', logFontColour);
  console.log(e1);
  console.log(e2);
  console.log(e3);
  console.log(e4);
}