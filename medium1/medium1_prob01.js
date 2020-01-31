// medium1_prob01.js

function rotateArray(argArray) {
  if (!Array.isArray(argArray)) return undefined;
  if (argArray.length === 0) return [];
  
  let returnArray = argArray.slice();
  let firstEl = returnArray.shift();
  returnArray.push(firstEl);
  
  return returnArray;
}


console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined
let array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]
console.log(rotateArray([[0], [1], [2]]));          // [[1], [2], [0]]