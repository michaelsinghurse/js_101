// medium2_prob07.js

function bubbleSort(arr) {
  let noSwap = true;
  
  while (true) {
    for (let index = 0; index < arr.length - 1; index += 1) {
      if (arr[index] > arr[index + 1]) {
        [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];
        noSwap = false;
      }
    }
    
    if (noSwap) break;
    noSwap = true;
  }
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]










