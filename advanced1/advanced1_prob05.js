// advanced1_prob05.js

function merge(arr1, arr2) {
  let newArray;
  let shortArray;
  
  if (arr1.length >= arr2.length) {
    newArray = arr1.slice();
    shortArray = arr2;
  }
  else {
    newArray = arr2.slice();
    shortArray = arr1;
  }
  
  shortArray.forEach(shortArrEl => {
    let spliceIndex = newArray.findIndex(newArrEl => newArrEl > shortArrEl);
    
    if (spliceIndex === -1) {
      newArray.push(shortArrEl);
    } else {
      newArray.splice(spliceIndex, 0, shortArrEl);  
    }
  });
  
  return newArray;
}

console.log(merge([1, 5, 9], [2, 6, 20]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]

