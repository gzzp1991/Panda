import { resolve } from "uri-js";
import { reject } from "q";

try {
  setTimeout(() => {
    throw new Error('Error...');
  }, 100);
  
  console.log('try...');
} catch(err) {
  console.log('catch...');
} finally {
  console.log('finally...');
}

try {
  const p = new Promise((resolve, reject) => {
    throw new Error('Error...');
  });
  console.log('try...');
} catch(err) {
  console.log('catch...');
} finally {
  console.log('finally...');
}

const a = {...undefined, ...{ a: 1 }};
console.log(a);