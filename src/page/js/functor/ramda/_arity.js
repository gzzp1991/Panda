// 原版
function _arity(n, fn) {
  /* eslint-disable no-unused-vars */
  switch (n) {
    case 0: return function() { return fn.apply(this, arguments); };
    case 1: return function(a0) { return fn.apply(this, arguments); };
    case 2: return function(a0, a1) { return fn.apply(this, arguments); };
    case 3: return function(a0, a1, a2) { return fn.apply(this, arguments); };
    case 4: return function(a0, a1, a2, a3) { return fn.apply(this, arguments); };
    case 5: return function(a0, a1, a2, a3, a4) { return fn.apply(this, arguments); };
    case 6: return function(a0, a1, a2, a3, a4, a5) { return fn.apply(this, arguments); };
    case 7: return function(a0, a1, a2, a3, a4, a5, a6) { return fn.apply(this, arguments); };
    case 8: return function(a0, a1, a2, a3, a4, a5, a6, a7) { return fn.apply(this, arguments); };
    case 9: return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) { return fn.apply(this, arguments); };
    case 10: return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) { return fn.apply(this, arguments); };
    default: throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
  }
}

// 精简
function _arity1(n, fn) {
  if (n < 0) {
    throw new Error('参数数目不能为负数');
  }
  if (n > 10) {
    throw new Error('参数数目不能大于10');
  }
  return function() { return fn.apply(this, arguments); };
}

function add(x, y) {
  return x + y;
}

function add1(x) {
  return x + 1;
}

const t1 = _arity(1, add1);
console.log('t1 ', t1(1));
console.log('t1 ', t1(2, 2));
console.log('t1 ', t1(3, 3, 3));

const t2 = _arity(2, add);
console.log('t2 ', t2(1));
console.log('t2 ', t2(2, 2));
console.log('t2 ', t2(3, 3, 3));

// const tt1 = _arity1(1, add1);
// console.log('tt1 ', t1(1));
// console.log('tt1 ', t1(2, 2));
// console.log('tt1 ', t1(3, 3, 3));

// const tt2 = _arity1(2, add);
// console.log('tt2 ', t2(1));
// console.log('tt2 ', t2(2, 2));
// console.log('tt2 ', t2(3, 3, 3));