// easy5-prob3.js

function halvsies(arr) {
  if (!Array.isArray(arr)) {
    console.log('The function accepts 1 array as an argument');
    return;
  }
  
  let returnArr = [[], []];
  
  arr.forEach((element, index) => {
    index < arr.length / 2 ? returnArr[0].push(element) 
                           : returnArr[1].push(element); 
  });
  
  return returnArr;
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]

