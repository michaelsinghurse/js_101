// easy-1-prob-5.js

/*
Problem
- Input
  - string bill amount
  - string tip percentage, given as whole number, e.g. 15 = 15%
- Output
  - Log - The tip amount, rounded to the cent
  - Log - The total bill, rounded to the cent
  - No return value
- Requirements
  - No input validation. Assume user enters numbers.
  - Assume whole number? --> Yes
  
Examples
#1
What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00

#2
What is the bill? 1
What is the tip percentage? 10

The tip is $0.10
The total is $1.10

Data Structure
- Number
  - Input values (must parse from string to int or Number)
  - Tip and total bill

Algorithm
- Prompt user for the bill amount. Convert to Number
- Prompt user for the tip percentages. Conver to Number.
- Assign product of bill and tip divided by 100 to variable for tip. 
  - Call toFixed(2) on this number.
- Assign sum of tip and bill to variable for total bill. toFixed(2)
  - Call toFixed(2) on this number.
- Log a template literal with the values.

*/

let rlSync = require('readline-sync');

let bill = Number(rlSync.question('What is the bill? '));

let tipPerc = Number(rlSync.question('What is the tip percentage? '));

let tip = bill * tipPerc / 100;

let billTotal = bill + tip;

console.log(`The tip is $${tip.toFixed(2)}\nThe total is ` + 
  `$${billTotal.toFixed(2)}`);




