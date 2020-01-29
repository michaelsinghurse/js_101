// list_processing_prob02.js

const NUMBER_TO_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six',
  'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
  'fifteen', 'sixteen', 'seventeen', 'eightteen', 'nineteen'];

function englishWordForNumber(number) {
  return NUMBER_TO_WORDS[number];
}

function placeNumberInArray(num, arr) {
  if (arr.length === 0) {
    arr.push(num);
    return arr;
  }

  let numWord = englishWordForNumber(num);

  for (let index = 0; index < arr.length; index += 1) {
    if (numWord < englishWordForNumber(arr[index])) {
      arr.splice(index, 0, num);
      break;
    } else if (index === arr.length - 1) {
      arr.push(num);
      break;
    }
  }
  
  return arr;
}

function alphabeticNumberSort(numArray) {
  let sortedArray = [];

  numArray.forEach(element => placeNumberInArray(element, sortedArray));

  return sortedArray;
}

console.log(alphabeticNumberSort([1, 2, 3, 4, 5])); // [5, 4, 1, 3, 2]
console.log(alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]


