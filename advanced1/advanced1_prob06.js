// advanced1_prob06.js

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

function mergeSort(array) {
  if (array.length === 1) return array;
  let mid = Math.floor(array.length / 2);
  
  return merge(mergeSort(array.slice(0, mid)), mergeSort(array.slice(mid)));
}

console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]
