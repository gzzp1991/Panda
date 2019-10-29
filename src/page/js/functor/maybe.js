class Maybe {
  constructor(value) {
    this.value = value;
  }
  static of(value) {
    return new Maybe(value);
  }
  map(f) {
    return Maybe.NIL.includes(this.value) ? Maybe.of(this.value) : Maybe.of(f(this.value));
  }
}

Maybe.NIL = [null, undefined, ''];

console.log(Maybe.of(1).map(v => v + 1));
console.log(Maybe.of('').map(v => v + 1));
console.log(Maybe.of(null).map(v => v + 1));
console.log(Maybe.of(undefined).map(v => v + 1));
