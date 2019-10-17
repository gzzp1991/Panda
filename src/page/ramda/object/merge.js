import * as R from 'ramda';
import { logFontColour } from 'util/constant';

const m1 = R.merge({ 'name': 'fred', 'age': 10 }, { 'age': 40 });

const mergeDefault = R.merge({ age: 10 });
const m2 = mergeDefault({ age: 15 });

const mergeLogic = (k, l, r) => l && r ? r : l;
// const mergeLogic = (k, l, r) => {
//   console.log(k, l, r);
//   if (l === undefined || r === undefined) {
//     return undefined;
//   }
//   return l;
// };

const m3 = R.mergeWithKey(mergeLogic, { a: 1 }, { b: 2 });

const isObject = R.compose(
  R.equals('Object'),
  R.type,
);

const isType = R.compose(
  R.equals(R.__),
  R.type,
);

export default function log() {
  console.log('%cmerge', logFontColour);
  console.log(m1);
  console.log(m2);
  console.log(m3);
  console.log(isType('Object')({}));
}