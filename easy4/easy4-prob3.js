// easy4-prob3.js

let readline = require('readline-sync');

let age = Number(readline.question('What is your age? '));

while (!Number.isInteger(age) || age < 1) {
  age = Number(readline.question('Please enter an integer over 0: '));
}

let retireAge = Number(readline.question('At what age would you like to retire? '));

while (!Number.isInteger(retireAge) || retireAge < age) {
  retireAge = Number(readline.question('Please enter an age at least ' +
  'as old as your current one: '));
}

let yearsUntilRetire = retireAge - age;

let today = new Date();
let currentYear = today.getFullYear();

console.log(`\nIt\'s ${currentYear}. You will retire in \
${currentYear + yearsUntilRetire}.`);
console.log(`You have only ${yearsUntilRetire} years of work to go!`);