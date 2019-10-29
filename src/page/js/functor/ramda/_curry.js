/**
 * @param {Number} length 已有占位符数量
 * @param {Array} received 最终参数暂存
 */
function _curryN(length, received, fn) {
  return function() {
    var combined = []; // 最终参数暂存(逐步替换占位符参数)
    var argsIdx = 0; // 当前参数位置标记
    var left = length;  // 占位符数量
    var combinedIdx = 0; // 最终参数暂存序号
    while (combinedIdx < received.length || argsIdx < arguments.length) {
      var result;
      // 如果存在最终参数暂存且非占位符
      if (combinedIdx < received.length &&
          (!_isPlaceholder(received[combinedIdx]) ||
           argsIdx >= arguments.length)) {
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