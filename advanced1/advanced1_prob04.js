// advanced1_prob04.js

function rotate90(array) {
  let newArray = [];
  
  for (let col = 0; col < array[0].length; col += 1) {
    let newRow = [];
    
    for (let row = array.length - 1; row >= 0; row -= 1) {
      newRow.push(array[row][col]);
    }
    
    newArray.push(newRow);
  }
  
  return newArray;
}

let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]