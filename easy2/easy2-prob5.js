// easy2-prob5.js

/*
Problem
- write a program
- do not validate input
- prompt user for two positive integers
- Input
  - two positive integers
- Output
  - logs the result of operations on two integers
  - Note - truncate the result of division operation
  - each operation has it's own log statement. console.log() each.
Examples
==> Enter the first number:
23
==> Enter the second number:
17
==> 23 + 17 = 40
==> 23 - 17 = 6
==> 23 * 17 = 391
==> 23 / 17 = 1
==> 23 % 17 = 6
==> 23 ** 17 = 141050039560662968926103

Data Structure
- Number for both integer inputs

Algorithm
- Use readline-sync to ask both questions
- Convert the string inputs to Numbers()
- Use a template literal to log the results. Perform the operations within
... the template literal.
*/

let rlSync = require('readline-sync');

let n1 = Number(rlSync.question('Enter the first number:\n'));

let n2 = Number(rlSync.question('Enter the second number:\n'));

console.log(`${n1} + ${n2} = ${n1 + n2}`);
console.log(`${n1} - ${n2} = ${n1 - n2}`);
console.log(`${n1} * ${n2} = ${n1 * n2}`);
console.log(`${n1} / ${n2} = ${Math.trunc(n1 / n2)}`);
console.log(`${n1} % ${n2} = ${n1 % n2}`);
console.log(`${n1} ** ${n2} = ${n1 ** n2}`);




