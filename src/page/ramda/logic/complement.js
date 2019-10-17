import * as R from 'ramda';
import { logFontColour } from 'util/constant';

export const isNotNil = R.complement(R.isNil);

const l1 = isNotNil(null);
const l2 = isNotNil(undefined);
const l3 = isNotNil(1);
const l4 = isNotNil([]);

export default function log() {
  console.log('%ccomplement', logFontColour);
  console.log(l1, l2, l3, l4);
}