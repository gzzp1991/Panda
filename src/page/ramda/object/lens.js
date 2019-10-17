import * as R from 'ramda';
import { logFontColour } from 'util/constant';

const lensX = R.lens(R.prop('x'), R.assoc('x'));

export default function log() {
  console.log('%clens', logFontColour);
}