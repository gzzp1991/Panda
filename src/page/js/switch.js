const o = {
  a: 1,
  b: 1,
  c: 1,
  d: 1,
  e: 1,
  f: 1,
  g: 1,
  h: 1,
  i: 1,
  j: 1,
  k: 1,
  l: 1,
  m: 1,
  n: 1,
};

const testSwitch = type => {
  switch (type) {
    case 'a':
      break;
    case 'b':
      break;
    case 'c':
      break;
    case 'd':
      break;
    case 'e':
      break;
    case 'f':
      break;
    case 'g':
      break;
    case 'h':
      break;
    case 'i':
      break;
    case 'j':
      break;
    case 'k':
      break;
    case 'l':
      break;
    case 'm':
      break;
    case 'n':
      break;
    default:
      break;
  }
};

const start = Number(new Date());

for (let index = 0; index < 1000000; index++) {
  testSwitch('f');
}

const middle = Number(new Date());

for (let index = 0; index < 1000000; index++) {
  o.f;
}

const end = Number(new Date());

console.log('switch耗时：', middle - start);
console.log('属性耗时：', end - middle);