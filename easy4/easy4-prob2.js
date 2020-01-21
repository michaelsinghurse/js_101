// easy4-prob2.js

const readline = require('readline-sync');

const NTH_ENTRIES = ['1st', '2nd', '3rd', '4th', '5th', 'last'];

let entries = getUserEntries();

let lastEntry = entries.pop();

let verb = entries.includes(lastEntry) ? 'appears' : 'does not appear';

console.log(`\nThe number ${lastEntry} ${verb} in ${entries.toString()}.`);

function getUserEntries() {
  let entry;
  let returnArray = [];
  
  for (let i = 0; i < NTH_ENTRIES.length; i += 1) {
    entry = readline.question(`Enter the ${NTH_ENTRIES[i]} number: `);
    
    while (entry.trim() === '' || Number.isNaN(Number(entry))) {
      entry = readline.question(`Please enter a valid number: `);
    }
    
    returnArray.push(Number(entry));
  }
  
  return returnArray;
}

