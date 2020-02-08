// advanced1_prob07.js

function binarySearch(array, searchItem) {
  if (array.length === 1) {
    return array[0] === searchItem ? 0 : -1;
  } else if (array.length === 2) {
    if (array[0] === searchItem) {
      return 0;
    } else if (array[1] === searchItem) {
      return 1;
    } else {
      return -1;
    }
  }
  
  let midIndex = Math.floor(array.length / 2);
  
  if (array[midIndex] === searchItem) {
    return midIndex;
  } if (array[midIndex] > searchItem) {
    let leftSearch = binarySearch(array.slice(0, midIndex), searchItem); 
    return leftSearch;
  } else {
    let rightSearch = binarySearch(array.slice(midIndex + 1), searchItem);
    return rightSearch !== -1 ? midIndex + 1 + rightSearch : -1;
  }
}

let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 
'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];

console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

let names = ['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'];
console.log(binarySearch(names, 'Peter'));  // -1
console.log(binarySearch(names, 'Tyler'));  // 6

