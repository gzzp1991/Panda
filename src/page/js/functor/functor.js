function double(x) {
  return x * 2
}
function add5(x) {
  return x + 5
}

class Functor {
  constructor(value) {
    this.value = value;
  }
  static of(value) {
    return new Functor(value);
  }
  map(f) {
    return Functor.of(f(this.value));
  }
}

console.log(Functor.of(2).map(add5));
console.log(Functor.of(2).map(double));
console.log(Functor.of(2).map(add5).map(double));