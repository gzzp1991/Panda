import * as R from 'ramda';
import { logFontColour } from 'util/constant';

const gt0 = R.gt(R.__, 0);
const lt100 = R.lt(R.__, 100);
const b = R.both(gt0, lt100);

const b1 = b(-5);
const b2 = b(0);
const b3 = b(5);
const b4 = b(15);
const b5 = b(100);
const b6 = b(105);

const us = R.useWith(R.and, [R.equals(1), R.equals(2)]);
const b7 = us(2, 2);

export default function log() {
  console.log('%cboth', logFontColour);
  console.log(b1);
  console.log(b2);
  console.log(b3);
  console.log(b4);
  console.log(b5);
  console.log(b6);
  console.log(b7);
}