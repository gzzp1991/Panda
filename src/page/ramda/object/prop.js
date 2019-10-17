import * as R from 'ramda';
import { logFontColour } from 'util/constant';

const p1 = R.prop('x', { x: 1 });

const p2 = R.compose(R.inc, R.prop('y'))({ y: 0 });

export default function log() {
  console.log('%cprop', logFontColour);
  console.log(p1);
  console.log(p2);
}