// advanced1_prob07.js

/*
Problem
- write a function
- input
  - param1: array
  - param2: string or number
- output
  - number
- rules
  - use the binary search algorithm to to return the index of the second param
    in the first param array.
  - return -1 if the value is not found
  - assume
    - the array is sorted in ascending order

Examples
let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 
'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];

binarySearch(yellowPages, 'Pizzeria');                   // 7
binarySearch(yellowPages, 'Apple Store');                // 0

binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77);    // -1
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89);    // 7
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5);     // 1

binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 
'Sue', 'Tyler'], 'Peter');  // -1
binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 
'Sue', 'Tyler'], 'Tyler');  // 6

Data Structure

Algorithm
- declare function `binarySearch` with params `array` and `searchItem`
  - declare  middleIndex
  - declare found = false;
  - delcare searchArray and assign to it a copy of array
  - while true
    - assign the middle index of searchArray to middleIndex
    - compare the array's value at middleIndex with searchItem
      - if they are equal
        - set found = true
        - break 
    - if array at middleIndex > searchItem => term is in the first half
      - assign array slice from 0 to middle index to searchArray
    - else => term is in the second half
      - assign slice from middleIndex + 1 to the end to searchArray
  - return middleIndex if found is true, otherwise -1
*/

function binarySearch(array, searchItem) {
  let searchArray = array.slice();
  let found = false;
  let midIndex;
  
  while (true) {
    midIndex = Math.floor(searchArray.length / 2);
    
    if (searchArray[midIndex] === searchItem) {
      found = true;
      break;
    } else {
      searchArray = searchArray[midIndex] > searchItem ? 
        searchArray.slice(0, midIndex) : searchArray.slice(midIndex + 1);
    }
  }
  
  return (found) ? midIndex : -1;
}




let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 
'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];

console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
// console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

// binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77);    // -1
// console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
// console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

// binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 
// 'Sue', 'Tyler'], 'Peter');  // -1
// console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 
// 'Sue', 'Tyler'], 'Tyler'));  // 6

