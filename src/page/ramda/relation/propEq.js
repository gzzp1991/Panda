import * as R from 'ramda';
import { logFontColour } from 'util/constant';

const abby = {name: 'Abby', age: 7, hair: 'blond'};
const fred = {name: 'Fred', age: 12, hair: 'brown'};
const rusty = {name: 'Rusty', age: 10, hair: 'brown'};
const alois = {name: 'Alois', age: 15, disposition: 'surly'};

const kids = [abby, fred, rusty, alois];
const hasHairBrown = R.propEq('hair', 'brown');

const p1 = R.filter(hasHairBrown, kids);

const p2 = hasHairBrown(abby);
const p3 = hasHairBrown(fred);

const p4 = R.propEq('hair', 'brown', abby);
const p5 = R.propEq('hair', 'brown', fred);

export default function log() {
  console.log('%cpropEq', logFontColour);
  console.log(p1);
  console.log(p2);
  console.log(p3);
  console.log(p4);
  console.log(p5);
}