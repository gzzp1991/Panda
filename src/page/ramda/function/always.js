import * as R from 'ramda';
import { logFontColour } from 'util/constant';

export const a1 = R.always('11');

export const a2 = R.always(true);

export const a3 = R.always('11')();

export default function log() {
  console.log('%calways', logFontColour);
  console.log(a1());
  console.log(a2());
  console.log(a3);
}