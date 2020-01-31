// prac_prob16.js

function reverseObjectEntries(entriesArray) {
  let obj = {};
  
  entriesArray.forEach(entry => {
    obj[entry[0]] = entry[1];
  });
  
  return obj;
}

let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

console.log(reverseObjectEntries(arr));
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }
