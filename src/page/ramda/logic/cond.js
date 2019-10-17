import * as R from 'ramda';
import { logFontColour } from 'util/constant';

const cond = R.cond([
  [R.equals(0), R.always('water freezes at 0°C')],
  [R.equals(100), R.always('water boils at 100°C')],
  [R.T, tem => `nothing special happens at ${tem}°C`],
]);

const c1 = cond(0);
const c2 = cond(30);
const c3 = cond(50);
const c4 = cond(100);

export default function log() {
  console.log('%ccond', logFontColour);
  console.log(c1);
  console.log(c2);
  console.log(c3);
  console.log(c4);
}