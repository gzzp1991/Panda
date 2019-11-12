function addTwo(x) {
  return x + 2;
}

class Ap {
  constructor(value) {
    this.value = value;
  }

  static of(value) {
    return new Ap(value);
  }

  ap(AP) {
    return Ap.of(this.value(AP.value));
  }
}

console.log(Ap.of(addTwo).ap(Ap.of(2)));
