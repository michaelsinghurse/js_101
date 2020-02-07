// advanced1_prob03.js

function transpose(arr) {
  let arrRowCount = arr.length;
  let arrColCount = arr[0].length;
  
  if (arrRowCount < 1 || arrColCount < 1 || !Array.isArray(arr[0])) {
    return undefined;
  } 
  
  let transposedArr = [];
  
  for (let row = 0; row < arrColCount; row += 1) {
    transposedArr.push([]);  
  }
  
  for (let row = 0; row < arr.length; row += 1) {
    for (let col = 0; col < arr[row].length; col += 1) {
      transposedArr[col][row] = arr[row][col];
    }
  }
  
  return transposedArr;
}

const matrix = [
  [1, 5, 8, 5],
  [4, 7, 2, 0],
  [3, 9, 6, 1]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      
// [
//   [1, 4, 3], 
//   [5, 7, 9], 
//   [8, 2, 6], 
//   [5, 0, 1]
// ]
console.log(matrix);         // [[1, 5, 8, 5], [4, 7, 2, 0], [3, 9, 6, 1]]

console.log(transpose([[1, 2, 3, 4]]));            
// [
//   [1], 
//   [2], 
//   [3], 
//   [4]
// ]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]

console.log(transpose([
  [1, 2, 3, 4, 5], 
  [4, 3, 2, 1, 0], 
  [3, 7, 8, 6, 2]
]));
// [
//   [1, 4, 3], 
//   [2, 3, 7], 
//   [3, 2, 8], 
//   [4, 1, 6], 
//   [5, 0, 2]
// ]

console.log(transpose([1]));