import { compose } from 'ramda';

class IO {
  constructor(value) {
    this.value = value;
  }
  static of(value) {
    return new IO(value);
  }
  map(f) {
    return IO.of(compose(f, this.value));
  }
}

function getLocation() {
  return function() {
    return winow.location;
  };
}

function getHref(x) {
  return x.href;
}

// 首先获取location，然后获取href
IO.of(getLocation()).map(getHref);