// Adapter -> promisify
const promisify = fn => (...arg) =>
  new Promise((resolve, reject) => {
    fn(...arg, (err, result) => (err ? reject(err) : resolve(result)));
  });
const delay = promisify((d, cb) => setTimeout(cb, d));
delay(2000).then(() => {
  console.log('resolved');
});

/**
 * Array
 */

// all
console.log('Array');
const all = (arr, fn = Boolean) => arr.every(fn);
console.log('    --all', all([1, 2, 3], v => v > 0));

// allEqual
const allEqual = arr => arr.every(v => v === arr[0]);
console.log('    --allEqual', allEqual([1, 2, 3]), allEqual([1, 1, 1]));

// chunk
const chunk = (arr, size) =>
  Array.from(
    { length: Math.ceil(arr.length / size) },
    (v, i) => arr.slice(i*size, i*size + size),
  );
console.log('    --chunk', chunk([1, 2, 3, 4, 5], 2));

// compact
const compact = arr => arr.filter(Boolean);
console.log('    --compact', compact([0, 1, true, false, '', NaN, undefined, null]));

// countBy
const countBy = (arr, fn) =>
  arr
    .map(typeof fn === 'function' ? fn : v => v[fn])
    .reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});
console.log(
  '    --countBy',
  countBy(['a', 'aa', 'aa'], 'length'),
  countBy([1.1, 2.1, 2.6], v => Math.floor(v)),
);

// countOccurrences
const countOccurrences = (arr, val) => arr.reduce((acc, v) => {
  return v === val ? acc + 1 : acc;
}, 0);
console.log('    --countOccurrences', countOccurrences([1, 1, 3], 1));

// deepFlatten
const deepFlatten = arr =>
  [].concat(...arr.map(v => Array.isArray(v) ? deepFlatten(v) : v));
console.log('    --deepFlatten', deepFlatten([[1, 2, 3], 4, 5, [[6, 7]]]));

// difference
const difference = (a, b) => {
  const A = [...new Set(a)];
  const B = [...new Set(b)];
  return [
    ...A.filter(v => !B.includes(v)),
    ...B.filter(v => !A.includes(v)),
  ];
}
console.log('    --difference', difference([1, 1, 2, 2], [3, 3, 4, 5, 5]));

// differenceBy
const differenceBy = (a, b, fn) => {
  const A = [...new Set(a.map(fn))];
  const B = [...new Set(b.map(fn))];
  return [
    ...A.filter(v => !B.includes(v)),
    ...B.filter(v => !A.includes(v)),
  ];
}
console.log('    --differenceBy', differenceBy([1, 1, 2, 2.1], [1.5, 2.2, 3, 3, 4, 5, 5], Math.floor));

// dropWhile
const dropWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[0])) {
    arr = arr.slice(1);
  }
  return arr;
}
console.log('    --dropWhile', dropWhile([1, 2, 3, 4], n => n >= 3));

// filterNonUnique
const filterNonUnique = arr => arr.filter(v => arr.indexOf(v) === arr.lastIndexOf(v));
console.log('    --filterNonUnique', filterNonUnique([1, 2, 2, 3, 4, 5, 6, 6]));

const flatten = (arr, depth = 1) => {
  return arr.reduce((r, v) => r.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), []);
}
console.log('    --flatten', flatten([1, [2], 3, 4]));

const groupBy = (arr, fn) => {
  return (
    arr
      .map(typeof fn === 'function' ? fn : v => v[fn])
      .reduce((rs, v, i) => {
        rs[v] = (rs[v] || []).concat(arr[i]);
        return rs;
      }, {})
  );
};
console.log('    --groupBy', groupBy([6.1, 4.2, 6.3], Math.floor), groupBy(['one', 'two', 'three'], 'length'));

const indexOfAll = (arr, val) => {
  return arr.reduce((rs, v, i) => v === val ? rs.concat(i) : rs, []);
}
console.log('    --indexOfAll', indexOfAll([1, 1, 2, 1, 3, 4], 1));

const isSorted = arr => {
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
console.log('    --isSorted', isSorted([0, 1, 2, 2]), isSorted([4, 3, 2]), isSorted([4, 3, 5]));