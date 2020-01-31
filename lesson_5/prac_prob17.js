// prac_prob17.js

/*
Problem
- write a function
- Input
  - none
- Output
  - string
- Rules
  - the string has a sequence of characters separated by dashes of format
    8-4-4-4-12
  - each character is from range 0 to 9 and a to f (16 possible values)

Examples
- 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'

Data Structure
- String

Algorithm
- declare function `randomHexCharString` with no parameters
  - declare `HEX_CHARS` array and assign to it ['0', '1', ..., 'e', 'f']
  - declare randomInt and assign Math.floor of random number * 16
  - return the `HEX_CHARS` element at the index of `randomInt`

- declare function `generateUUID` with no parameters
  - declare `uUID` and set equal to an empty string
  - for loop (declare `index` and set equal to 1, for index less than or equal to
    36, increment `index` by 1 each loop)
    - if `index` is 9,14,19,24
      - append a '-' to `uUID`
    - else
      - append call `randomHexCharString`
  - return `uUID`
*/

function randomHexCharString() {
  const HEX_CHARS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a',
  'b', 'c', 'd', 'e', 'f'];
  
  let randomInt = Math.floor(Math.random() * HEX_CHARS.length);
  
  return HEX_CHARS[randomInt];
}

function generateUUID() {
  const DASH_INDEX = [9, 14, 19, 24];
  
  let uUID = '';
  
  for (let index = 1; index <= 36; index += 1) {
    if (DASH_INDEX.includes(index)) {
      uUID += '-';
    } else {
      uUID += randomHexCharString();
    }
  }
  
  return uUID;
}

console.log(generateUUID());
console.log(generateUUID());
console.log(generateUUID());
console.log(generateUUID());
console.log(generateUUID());
console.log(generateUUID());
console.log(generateUUID());
console.log(generateUUID());