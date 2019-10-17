function debounce(func, delay = 100, immediate) {
  let timeout;
  let context;
  let args;
  let stamp;

  function later() {
    const duration = Date.now() - stamp;
    if (duration < delay && duration >= 0) {
      timeout = setTimeout(later, delay - duration);
    } else {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
        context = null;
        args = null;
      }
    }
  }

  function debounced(...arg) {
    context = this;
    args = arg;
    stamp = Date.now();

    if (!timeout) {
      timeout = setTimeout(later, delay);
    }
    if (!timeout && immediate) {
      func.apply(context, args);
      context = null;
      args = null;
    }
  }

  debounced.clear = function clear() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };

  return debounced;
}

export default debounce;
