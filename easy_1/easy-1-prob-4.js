// easy-1-prob-4.js

/*
Problem
- Input
  - Prompt the user for length in meters
  - Prompt the user for width in meters
  - Therefore, 2 string inputs from user
  - No need to validate input --> Assume input > 0
- Output
  - Logs area in square meters and square feet to console
  - Round to the second decimal place
  - No return value
- Rules
  - 1 sq m = 10.7639 sq ft
  - readline.prompt to get user input

Examples
#1
Enter the length of the room in meters:
10
Enter the width of the room in meters:
7
The area of the room is 70.00 square meters (753.47 square feet).

Data Structure
- Input as Number
  - parse from string to number
- Conversion from sq meter to sq feet in code rather than data structure

Algorithm
- prompt user for length and then for width
- assign each string input to a variable of number type using Number()
- assing the product of two numbers to a variable for sq meters
- assign the product of sq meters and the conversion ratio to variable for 
... sq feet
- use a template literal to pass back the sq meters and sq feet
- call toFixed(2) on each area before passing back

*/

let readlineSync = require('readline-sync');

console.log('Enter the length of the room in meters: ');
let lengthM = Number(readlineSync.prompt());
  
console.log('Enter the width of the room in meters: ');
let widthM = Number(readlineSync.prompt(''));
  
let areaM = lengthM * widthM;

let areaF = areaM * 10.7639;

console.log(`The area of the room is ${areaM.toFixed(2)} square meters ` +
  `(${areaF.toFixed(2)} square feet).`);