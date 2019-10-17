import * as R from 'ramda';
import { timeTaking } from 'util';

console.log('*****    Function    *****');

// console.log('converge ', R.converge(R.add, [R.abs, R.abs])(5));

// const func = a => b => c => {
//   return a + b + c;
// };
// const g = R.curry(func);
// console.log('curry ', g(1)(2)(3));

console.log('empty ', R.empty([1, 2, 3]), R.empty({ a: 1, b: 2 }), R.empty('a12132'), R.empty(1232));

const cal = (a, b, c) => a + b - c;
console.log('flip ', R.flip(cal)(6 , 1, 1));

const oneAdd = R.once(x => x + 1);
console.log('oneAdd ', oneAdd(1), oneAdd(5), oneAdd(5));

console.log('of ', R.of(1, 2, 3), R.of(null, ''));

console.log('*****    Object    *****');

console.log('dissoc ', R.dissoc('a', { a: 1, b: 2, c: 3 }));

console.log('eqProps ', R.eqProps('a', { a: 2 })({ a: 2 }), R.eqProps('a', { a: 2 })({ a: 1 }));

const a = { a: 1, b: 2, c: 3 };
const isAProp = R.has(R.__, a);
console.log('has ', isAProp('a'), isAProp('b'), isAProp('c'), isAProp('d'));

console.log('merge ', R.merge({ a: 1, b: 3 }, { a: 2 }), R.merge({ a: 1, b: 3 })({ a: 2 }));

console.log('onjOf ', R.map(R.objOf('name'))(['zp', 'lcw', 'lj']));

console.log('omit ', R.omit(['a', 'b', 'c'])({ a: 1, b: 2, c: 3, d: 4 }));

// const view = R.view(R.lensProp(R.__), { x: 1, y: 2, z: 3 });
// console.log('view ', view('x'));
console.log('view ', R.view(R.lensProp('x'), { x: 1, y: 2, z: 3 }));
console.log('over ', R.over(R.lensIndex(0), R.inc, [0, 1, 2]));

const pred = R.where({
  a: R.equals('1'),
  b: R.complement(R.equals('1')),
  c: R.gt(R.__, 15),
  d: R.lt(R.__, 20)
});
console.log('where ', pred({ a: '1', b: '1', c: 16, d: 18 }));

console.log('*****    Relation    *****');

console.log('clamp ', R.clamp('10000', '9', '15'));

console.log('countBy ', R.countBy(Math.ceil)([1.1, 1.2, 2.1, 3.1]));

console.log('difference ', R.difference([1, 2, 3], [3, 4, 5]));

console.log('eqBy ', R.eqBy(R.inc, 4, 5));





const g = R.replace('{name}', R.__, 'Hello, {name}!');
console.log('__ ', g('ZP'));

console.log('addIndex ', R.addIndex(R.map)(v => v + 1, [0, 1, 2, 3, 4, 5]));

console.log('all ', R.all(R.equals(3), [3, 3, 3]));

const isNamea = R.propEq('name', 'a');
const isAge12 = R.propEq('age', 12);
console.log('allPass ', R.allPass([isNamea, isAge12])({ name: 'a', age: 12 }));

const t = R.always('Tree');
console.log('always ', t());
const al = R.always([1, 2, 3]);
console.log('always ', al());

const lessThan6 = R.flip(R.lt)(6);
console.log('any', R.any(lessThan6)([7]));

const isKey1 = R.propEq('key', 1);
const isKey2 = R.propEq('key', 2);
console.log('anyPass', R.anyPass([isKey1, isKey2])({ key: 3 }));

console.log('and ', R.and(true, true));

const byNum = R.descend(R.identity);
console.log('ascend ', R.sort(byNum, [1, 2, 3]));

// const strSort = R.comparator((a, b) => {
//   const aLen = a.length;
//   const bLen = b.length;
//   if (aLen === bLen) {
//     return a < b ? -1 : 1;
//   }
//   return aLen - bLen;
// });
// console.log('comparator ', R.sort(strSort, ['9', '1212', '4', '8789798', '45']));

console.log('assoc', R.assoc('c', 3, { a: 1, b: 2 }));

console.log('F | T', R.F(), R.T());

const gt10 = R.gt(R.__, 10);
const lt20 = R.lt(R.__, 20);
console.log('both', R.both(gt10, lt20)(11), R.both(gt10, lt20)(19), R.both(gt10, lt20)(21));
console.log('both ', R.both(R.T, R.F)());
console.log('both []', R.both([false, false, '2'], [9]));
console.log('both []', R.both([false, false, '2'], [9, 10]));

const cond = R.cond([
  [R.equals(0), R.always('equals 0')],
  [R.equals(50), R.always('equals 50')],
  [R.T, R.always('not 5 && not 10!')]
]);
console.log('cond ', cond(0));
console.log('cond ', cond(50));
console.log('cond ', cond(10));

console.log('complement ', R.complement(R.T)(), R.complement(R.F)());
console.log('complement ', R.complement(R.always(''))());

console.log('equals ', R.equals(1, 1), R.equals(1, '1'), R.equals(1, 2), R.equals({ v: {} }, { v: [] }));

const et = R.either(R.equals(1), R.equals(2));
console.log('either ', et(1), et(2), et(3));

console.log('compose ', R.compose(Math.abs, R.add(6), R.multiply(2))(-5));

const isEven = n => n % 3 === 0;
console.log('filter ', R.filter(isEven, [1, 2, 3, 4]), R.filter(isEven, { a: 1, b: 2, c: 3 }));

console.log('isEmpty ', R.isEmpty([]), R.isEmpty({}), R.isEmpty(''));

console.log('isNil ', R.isNil(null), R.isNil(undefined), R.isNil([]));

console.log('includes in Array ', R.includes(1, [1, 2, 3]), R.includes(4, [1, 2, 3]));

console.log('includes in String ', R.includes('a', 'abc'), R.includes('d', 'abc'));

const square = v => v ** 2;
console.log('map ', R.map(square, [1, 2]), R.map(square)([2, -1]));

const xProp = R.lens(R.prop('x'));
console.log('over use lens ', R.over(xProp, R.toUpper, { x: 'a', y: 'b' }));

console.log('pipe ', R.pipe(R.add, R.negate, R.inc)(5, 5));

console.log('identity ', R.identity({}));

console.log('path ', R.path(['a', 'b'], { a: { b: 1 } }), R.path(['a', 'b'], { b: { c: 1 } }));

const zp = { name: 'zp' };
const lcw = { name: 'lcw' };
const filterZp = R.pathEq(['name'], 'zp');
console.log('pathEq ', R.filter(filterZp, [zp, lcw]));

console.log('prop ',
  R.prop('x', { x: 3 }),
  R.prop('x', { y: 3 }),
  R.pipe(R.prop('x'), R.inc)({ x: 3 }));

console.log('split ', R.tail(R.split('.', '.a.b.c')));

const diff = (a, b) => {
  const aLen = a.length;
  const bLen = b.length;
  if (aLen === bLen) {
    return a < b ? -1 : 1;
  }
  return aLen - bLen;
};
// const diffBg = (a, b) => BigInt(a) < BigInt(b) ? -1 : 1;
const diffBg = (a, b) => Number(a) - Number(b);
// const diffBg = (a, b) => a - b;
console.log('sort ', R.sort(diff, ['9', '1', '16', '6562']));
console.log('sort ', R.sort(diffBg, ['9', '1', '16', '6562']));
const diffTest = () => {
  ['9', '1', '16', '6562', '12321', '5', '235435', '5687', '346', '89087'].sort(diff);
};
const diffBgTest = () => {
  [9, 1, 16, 6562, 12321, 5, 235435, 5687, 346, 89087].sort(diffBg);
};
timeTaking(diffTest, 100000);
timeTaking(diffBgTest, 100000);