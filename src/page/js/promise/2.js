const callback = (errors, values) => {
  console.log('回调开始 ', errors, values);

  const nil = undefined;
  nil.trim();

  console.log('回调结束 ');
};

const test = callback => {
  const pending = new Promise((resolve, reject) => {
    const cb = (errors, values) => {
      if (callback) {
        callback(errors, values);
      } else if (errors) {
        reject({ errors, values });
      } else {
        resolve(values);
      }
    };

    cb(undefined, 'bingo!');
  });
  pending.catch(err => {
    console.log('pending err ', err);
  });
  
  return pending;
};

const p = test(callback);
