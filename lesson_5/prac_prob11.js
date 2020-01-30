// prac_prob11.js

// Given the following data structure, use the map method to return a new array 
// identical in structure to the original but, with each the number incremented 
// by 1. Do not modify the original data structure.

let arr1 = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let arr2 = arr1.map(obj => {
  let newObj = Object.assign({}, obj);
  Object.keys(newObj).forEach(key => newObj[key] += 1);
  return newObj;
});

console.log(arr1);
console.log(arr2);