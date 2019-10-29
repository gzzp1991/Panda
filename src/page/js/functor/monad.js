function addTwo(x) {
  return x + 2;
}

// 新增join和chain
class Monad {
  constructor(value) {
    this.value = value;
  }
  static of(value) {
    return new Monad(value);
  }
  map(f) {
    return Monad.of(f(this.value));
  }
  join() {
    return this.value;
  }
  chain(f) {
    return this.map(f).join();
  }
}

const monads = Monad.of(Monad.of(Monad.of(2)));
const int = monads.join().join().join();
console.log(int);

console.log(Monad.of(2).map(addTwo));
console.log(Monad.of(2).chain(addTwo));
console.log(Monad.of(2).map(addTwo).join());

