// easy-1-prob-2.js

/*
Problem
- Log all *odd* numbers from 1 to 99 to the console.
- Include 1 and 99
- Each number should be on a separate line
- Input
  - None
- Output
  - No return value
  - Log output to console

Examples
1
3
5
...
99

Data Structure
- Number

Algorithm
- Set counter to 1.
- Start a loop. Log the counter to the console. Increment the counter by 2.
- End the loop once the counter exceeds 99.

*/

let i = 1;

while (i <= 99) {
  console.log(i);
  i += 2;
}