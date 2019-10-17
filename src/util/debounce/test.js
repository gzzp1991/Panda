function test(func) {
  function inner() {
    // console.log('this ', this);
    setTimeout(() => {
      func.apply(null);
    }, 500);
  };
  return inner;
};
// const test = () => {
//   const inner = () => {
//     console.log('this ', this);
//   };
//   return inner;
// };

const b = {};

export default test;
