function _arity(n, fn) {
  switch (n) {
    case 0:
      return function() {
        return fn.apply(this, arguments);
      };
    case 1:
      return function(a0) {
        return fn.apply(this, arguments);
      };
    case 2:
      return function(a0, a1) {
        return fn.apply(this, arguments);
      };
    case 3:
      return function(a0, a1, a2) {
        return fn.apply(this, arguments);
      };
    case 4:
      return function(a0, a1, a2, a3) {
        return fn.apply(this, arguments);
      };
    case 5:
      return function(a0, a1, a2, a3, a4) {
        return fn.apply(this, arguments);
      };
    case 6:
      return function(a0, a1, a2, a3, a4, a5) {
        return fn.apply(this, arguments);
      };
    case 7:
      return function(a0, a1, a2, a3, a4, a5, a6) {
        return fn.apply(this, arguments);
      };
    case 8:
      return function(a0, a1, a2, a3, a4, a5, a6, a7) {
        return fn.apply(this, arguments);
      };
    case 9:
      return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) {
        return fn.apply(this, arguments);
      };
    case 10:
      return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        return fn.apply(this, arguments);
      };
    default:
      throw new Error(
        'First argument to _arity must be a non-negative integer no greater than ten'
      );
  }
}

function _isPlaceholder(a) {
  return (
    a != null && typeof a === 'object' && a['@@functional/placeholder'] === true
  );
}

function _curry1(fn) {
  return function f1(a) {
    if (arguments.length === 0 || _isPlaceholder(a)) {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  };
}

function _curry2(fn) {
  return function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2;
      case 1:
        return _isPlaceholder(a)
          ? f2
          : _curry1(function(_b) {
              return fn(a, _b);
            });
      default:
        return _isPlaceholder(a) && _isPlaceholder(b)
          ? f2
          : _isPlaceholder(a)
          ? _curry1(function(_a) {
              return fn(_a, b);
            })
          : _isPlaceholder(b)
          ? _curry1(function(_b) {
              return fn(a, _b);
            })
          : fn(a, b);
    }
  };
}

function _curry3(fn) {
  return function f3(a, b, c) {
    switch (arguments.length) {
      case 0:
        return f3;
      case 1:
        return _isPlaceholder(a)
          ? f3
          : _curry2(function(_b, _c) {
              return fn(a, _b, _c);
            });
      case 2:
        return _isPlaceholder(a) && _isPlaceholder(b)
          ? f3
          : _isPlaceholder(a)
          ? _curry2(function(_a, _c) {
              return fn(_a, b, _c);
            })
          : _isPlaceholder(b)
          ? _curry2(function(_b, _c) {
              return fn(a, _b, _c);
            })
          : _curry1(function(_c) {
              return fn(a, b, _c);
            });
      default:
        return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c)
          ? f3
          : _isPlaceholder(a) && _isPlaceholder(b)
          ? _curry2(function(_a, _b) {
              return fn(_a, _b, c);
            })
          : _isPlaceholder(a) && _isPlaceholder(c)
          ? _curry2(function(_a, _c) {
              return fn(_a, b, _c);
            })
          : _isPlaceholder(b) && _isPlaceholder(c)
          ? _curry2(function(_b, _c) {
              return fn(a, _b, _c);
            })
          : _isPlaceholder(a)
          ? _curry1(function(_a) {
              return fn(_a, b, c);
            })
          : _isPlaceholder(b)
          ? _curry1(function(_b) {
              return fn(a, _b, c);
            })
          : _isPlaceholder(c)
          ? _curry1(function(_c) {
              return fn(a, b, _c);
            })
          : fn(a, b, c);
    }
  };
}

/**
 * @param {Number} length 已有占位符数量
 * @param {Array} received 最终参数暂存
 */
function _curryN(length, received, fn) {
  return function() {
    var combined = []; // 最终参数暂存(逐步替换占位符参数)
    var argsIdx = 0; // 当前参数位置标记
    var left = length; // 占位符数量
    var combinedIdx = 0; // 最终参数暂存序号
    while (combinedIdx < received.length || argsIdx < arguments.length) {
      var result;
      // 如果存在最终参数暂存且非占位符
      if (
        combinedIdx < received.length &&
        (!_isPlaceholder(received[combinedIdx]) || argsIdx >= arguments.length)
      ) {
        result = received[combinedIdx];
        // 1. 不存在最终参数暂存
        // 2. 或者，存在最终参数暂存且是占位符，用当前参数替换
      } else {
        result = arguments[argsIdx];
        argsIdx += 1;
      }
      // 放入最终参数暂存
      combined[combinedIdx] = result;
      // 如果是占位符，不执行
      if (!_isPlaceholder(result)) {
        left -= 1;
      }
      // 最终参数暂存序号+1
      combinedIdx += 1;
    }
    return left <= 0
      ? fn.apply(this, combined) // 参数已齐，直接执行(数量齐且无占位符)
      : _arity(left, _curryN(length, combined, fn)); // 参数不齐(1.数量不齐 2.存在占位符)
  };
}

var curryN = _curry2(function curryN(length, fn) {
  if (length === 1) {
    return _curry1(fn);
  }
  return _arity(length, _curryN(length, [], fn));
});

var curry = _curry1(function curry(fn) {
  return curryN(fn.length, fn);
});

const add = (x, y, z, m, n, l) => {
  console.log('最终执行', x + y + z + m + n + l);
  return x + y + z + m + n + l;
};

const test = curry(add);

test(1, 2, 3, 4, 5, 6);
