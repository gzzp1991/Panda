import * as R from 'ramda';
import { logFontColour } from 'util/constant';

const nameBrief = (firstName, lastName) => `The name's ${lastName}, ${firstName} ${lastName}`;

const lowerName = R.compose(R.toLower, nameBrief);
const upperName = R.compose(R.toUpper, nameBrief);

const c1 = lowerName('Zhang', 'Pan');
const c2 = upperName('Zhang', 'Pan');

export default function log() {
  console.log('%ccompose', logFontColour);
  console.log(c1);
  console.log(c2);
}