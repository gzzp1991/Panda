Promise.resolve('2').finally(() => {
  return 5;
})

const spreadOver = fn => argsArr => fn(...argsArr);
const getMax = spreadOver(Math.max);
console.log(getMax([1, 2, 3]));

const unary = fn => val => fn(val);
const a = ['6', '8', '10'].map(parseInt);
console.log(a);

