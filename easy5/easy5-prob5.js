// easy5-prob5.js

const interleave = (arr1, arr2) => {
  let newArray = [];
  
  for (let index = 0; index < arr1.length; index += 1) {
    newArray.push(arr1[index], arr2[index]);
  }
  
  return newArray;
};

console.log(interleave([1, 2, 3], ['a', 'b', 'c'])); // [1, "a", 2, "b", 3, "c"]
console.log(interleave(['hi', 'michael'], ['there', 'singhurse']));


