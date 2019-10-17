const isSortedA = arr => {
  return arr.reduce((rs, v) => {
    if (rs.type === -2) {
      rs.type = v === rs.prev ? -2 : v > rs.prev ? -1 : 1;
      rs.prev = v;
    } else if (rs.type === 1) {
      rs.type = v === rs.prev ? 1 : v > rs.prev ? 0 : 1;
      rs.prev = v;
    } else if (rs.type === -1) {
      rs.type = v === rs.prev ? -1 : v > rs.prev ? -1 : 0;
      rs.prev = v;
    }
    return rs;
  } , { prev: arr[0], type: -2 }).type;
};

const isSortedB = arr => {
  return arr.reduce((rs, v) => {
    switch (rs.type) {
      case 1: {
        rs.type = v === rs.prev ? 1 : v > rs.prev ? 0 : 1;
        rs.prev = v;
        break;
      }
      case -1: {
        rs.type = v === rs.prev ? -1 : v > rs.prev ? -1 : 0;
        rs.prev = v;
        break;
      }
      case -2: {
        rs.type = v === rs.prev ? -2 : v > rs.prev ? -1 : 1;
        rs.prev = v;
        break;
      }
      default:
        break;
    }
    return rs;
  } , { prev: arr[0], type: -2 }).type;
};

const isSortedC = arr => {
  let direction = -(arr[0] - arr[1]);
  for (let [i, val] of arr.entries()) {
    direction = !direction ? -(arr[i - 1] - arr[i]) : direction;
    if (i === arr.length - 1) return !direction ? 0 : direction;
    else if ((val - arr[i + 1]) * direction > 0) return 0;
  }
};

const start = Number(new Date());

for (let index = 0; index < 10000; index++) {
  isSortedA([4, 3, 23,28,749,82,374,27,37,89,4]);
}

const middle = Number(new Date());

for (let index = 0; index < 10000; index++) {
  isSortedB([4, 3, 23,28,749,82,374,27,37,89,4]);
}

const end = Number(new Date());

for (let index = 0; index < 10000; index++) {
  isSortedC([4, 3, 23,28,749,82,374,27,37,89,4]);
}

const end1 = Number(new Date());

console.log('isSortedA耗时：', middle - start);
console.log('isSortedB耗时：', end - middle);
console.log('isSortedC耗时：', end1 - end);