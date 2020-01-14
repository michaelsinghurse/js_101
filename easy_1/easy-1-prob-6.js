// easy-1-prob-6.js

/*
Problem
- Input
  1. An integer greater than 0. Do I need to validate?
  2. Either 's' for sum or 'p' for product. What if neither?
- Return
  - Log either the sum or the product to the console.
  - No return value
  
Examples
# 1
Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15.

#2
Please enter an integer greater than 0: 6
Enter "s" to compute the sum, or "p" to compute the product. p

The product of the integers between 1 and 6 is 720.

Data Structure
- Number for integer input
- Code/logic for s or p input

Algorithm
- Prompt the user for a number greater than 0
- Parse the string input to an integer base 10
- Prompt the user to enter s or p.
- If-else statement with s and p to assign operation name "sum" or "product"
- initialize answer variable to 1. Counter variable to 1 
- for loop from 1 to integer input
  - each loop either add the counter or multiply counter to answer
- log the statement to the console.
*/

let rlSync = require('readline-sync');

let num = Number.parseInt(rlSync.question('Please enter an integer greater ' + 
  'than 0: ')
  , 10);
  
let op = rlSync.question('Enter "s" to compute the sum, or "p" to compute ' +
  'the product. ');

let opName;
let ans;

if (op === 's') {
  opName = 'sum';
  
  ans = 0;
  for (let i = 1; i <= num; i += 1) {
    ans += i;
  }
  
} else if (op === 'p') {
  opName = 'product';
  
  ans = 1;
  for (let i = 1; i <= num; i += 1) {
    ans *= i;
  }
}

console.log(`The ${opName} of the integers between 1 and ${String(num)} is ` +
  `${String(ans)}.`);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  