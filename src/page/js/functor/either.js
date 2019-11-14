class Either {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }
  static of(left, right) {
    return new Either(left, right);
  }
  map(f) {
    return this.right
      ? Either.of(this.left, f(this.right))
      : Either.of(f(this.left), this.right);
  }
}

console.log(Either.of(1, 2).map(v => v + 1));
console.log(Either.of(1, null).map(v => v + 1));
