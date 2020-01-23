// easy5-prob2.js

function union(arr1, arr2) {
  let union = [];
  
  arr1.forEach(element => {
    if (!union.includes(element)) {
      union.push(element);
    }
  });
  
  arr2.forEach(element => {
    if (!union.includes(element)) {
      union.push(element);
    }
  });
  
  return union;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
console.log(union([], []));                  // []
console.log(union(['a', 'b'], ['f', 'c']));  // ['a', 'b', 'f', 'c']
