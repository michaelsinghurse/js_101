// prac_prob10.js

// Perform the same transformation of sorting the subarrays we did in the 
// previous exercise with one difference; sort the elements in descending order.

let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

let arr2 = arr.map(subArray => {
  if (typeof subArray[0] === 'string') {
    return subArray.slice().sort().reverse();
  } else {
    return subArray.slice().sort((a, b) => {
      if (a < b) {
        return 1;
      }
    });
  }
});

console.log(arr);
console.log(arr2);