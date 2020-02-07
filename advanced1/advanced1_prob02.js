// advanced1_prob02.js

function transpose(arr) {
  // modify the function to set the dimensions dynamically
  let transposedArr = [[], [], []];
  
  for (let row = 0; row < arr.length; row += 1) {
    for (let col = 0; col < arr[row].length; col += 1) {
      transposedArr[col][row] = arr[row][col];
    }
  }
  
  return transposedArr;
}

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
