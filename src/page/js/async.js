const fetchDataA = () => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve('fetch data is A');
      }, 1000);
  });
};

const fetchDataB = () => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          reject('B reject');
      }, 1000);
  });
};

const fetchDataC = () => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve('fetch data is C');
      }, 1000);
  });
};


const a1 = async () => {
  await fetchDataA();
  await fetchDataB().catch(() => {});
  await fetchDataC();
  return await 'resolve';
};

a1()
  .then(v => {
    console.log(v);
  })
  .catch(err => {
    console.log('err ', err);
  });
