// 最长不重复字符串
export function longSub(str) {
  let len = str.length;
  if (len === 1 || len === 0) {
    return str;
  }
  let result = '';
  let cur = '';
  for (let i = 0; i < len; i++) {
    const val = str[i];
    const index = cur.indexOf(val);
    if (index < 0) {
      cur += val;
      if (cur.length > result.length) {
        result = cur;
      }
    } else {
      cur = cur.slice(index + 1) + val;
    }
  }
  return result;
}

// 数组扁平化
export function* iterArr(tree) {
  if (Array.isArray(tree)) {
    for (let node of tree) {
      yield* iterArr(node);
    }
  } else {
    yield tree;
  }
}

/**
 * 整数|字符串-大小比较(兼容Big Int)
 * @param {number|string} a 比较数
 * @param {number|string} b 被比较数
 * @param {string(< | <= | > | >= | == | === | !== | ===)} sign 比较符号
 * @return Boolean
 */
export function compare(a, b, sign) {
  // const legalRegepx = new RegExp(/^(0|[1-9]\d*)(\.\d*[1-9])?$/);
  const typeOfA = typeof a;
  const typeOfB = typeof b;
  if (
    !/^(string|number)$/.test(typeOfA) ||
    !/^(string|number)$/.test(typeOfB)
  ) {
    throw new Error('比较数的类型需为数字或字符串(数字类型)');
  }

  let comparison;
  if (typeOfA === 'string' && typeOfB === 'string') {
    if (!/^\d+$/.test(a) || !/^\d+$/.test(b)) {
      throw new Error('不能包含除0-9之外的其他字符');
    }
    const lenA = a.length;
    const lenB = b.length;
    if (lenA > lenB) {
      comparison = '>';
    } else if (lenA < lenB) {
      comparison = '<';
    } else {
      comparison = a === b ? '=' : a < b ? '<' : '>';
    }
  }
  if (typeOfA === 'number' && typeOfB === 'number') {
    if (BigInt) {
      const bigA = BigInt(a);
      const bigB = BigInt(b);
      comparison = bigA === bigB ? '=' : bigA < bigB ? '<' : '>';
    }
  }
  switch (sign) {
    case '<':
      return comparison === '<';
    case '>=':
      return comparison !== '<';
    case '>':
      return comparison === '>';
    case '<=':
      return comparison !== '>';
    case '==':
    case '===':
      return comparison === '=';
    case '!=':
    case '!==':
      return comparison !== '=';
    default:
      throw new Error(`比较符号必须是< <= > >= == === !== ===之一`);
  }
}

export const compose = (...funcs) => {
  const len = funcs.length;
  if (len === 0) {
    return arg => arg;
  }
  if (len === 1) {
    return funcs[0];
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)));
};

// timeTaking
export const timeTaking = (cb, count = 10000) => {
  const start = new Date().getTime();
  let i = 0;
  while (i++ < count) {
    cb();
  }
  const end = new Date().getTime();
  console.log('耗时 ', end - start);
  return end - start;
};

/**
 * 判断是否是手机查看，这里判断一下浏览器代理是不是移动端的代理
 * Navigator 对象包含有关浏览器的信息。
 * http://www.w3school.com.cn/jsref/dom_obj_navigator.asp
 */
const isMobile =
  typeof navigator !== 'undefined' &&
  !!navigator.userAgent.match(/(Android|iPhone|iPad|iPod|iOS|UCWEB)/i);
