// easy2-prob2.js

/*
Problem
- write a program.
- Input
  - user's name as string
  - validate input? No.
- Output
  - logs a greeting
- Requirements
  - greeting uses the user name
  - if user appends an ! mark after his name, respond in all caps.
  
Examples
#1
What is your name? Bob
Hello Bob.

#2
What is your name? Bob!
HELLO BOB. WHY ARE WE SCREAMING?

Data Structure
String

Algorithm
- if user's input ends with '!', then log all caps response. be sure to slice
... the exclamation mark from user name
- else log regular response.
*/

const rlSync = require('readline-sync');

let name = rlSync.question('What is your name? ');

name.endsWith('!') ? shoutResponse(name.slice(0, -1)) : sayResponse(name);

function shoutResponse(n) {
  console.log(`HELLO ${n.toUpperCase()}. WHY ARE WE SCREAMING?`);
}

function sayResponse(n) {
  console.log(`Hello ${n}.`);
}