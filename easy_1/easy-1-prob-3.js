// easy-1-prob-3.js

/*
Problem
- Log all *even* numbers from 1 to 99 to the console.
- Include 1 and 99 (i.e. 2 and 99)
- One number per line
- Input
  - None
- Output
  - None (only console log)

Examples
2
4
6
...
98

Data Structure
- Number

Algorithm
- Set a counter equal to 1
- Start a loop. 
  - If the counter modulo 2 is 0, log the counter.
  - Increases the counter by 1
- Exit the loop once the counter exceeds 99

*/

let i = 1;

while (i <= 99) {
  if (i % 2 === 0) {
    console.log(i);
  }
  
  i += 1;
}