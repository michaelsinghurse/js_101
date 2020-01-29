// easy6-prob11.js

function reverse(originalArr) {
  if (!Array.isArray(originalArr)) {
    console.log('Please only pass arrays to this function');
    return;
  }
  
  let copyArr = originalArr.slice(0);
  
  for (let counter = 0; counter < originalArr.length; counter += 1) {
    originalArr[counter] = copyArr[copyArr.length - 1 - counter];
  }
  
  return originalArr;
}

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true

