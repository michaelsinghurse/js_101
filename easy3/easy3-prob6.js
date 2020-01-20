// easy3-prob6.js

let readline = require('readline-sync');

let noun = getPartOfSpeech('noun');
let verb = getPartOfSpeech('verb');
let adjective = getPartOfSpeech('adjective');
let adverb = getPartOfSpeech('adverb');

printMadlib(noun, verb, adjective, adverb);

function getPartOfSpeech(part) {
  let response = readline.question(`Enter a ${part}: `);
  
  while (response.trim() === '') {
    response = readline.question('Enter at least one character please: ');
  }
  
  return response;
}

function printMadlib(noun, verb, adjective, adverb) {
  console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}?\
  That's hilarious!`);
  console.log(`The ${adjective} ${noun} ${verb}s ${adverb} over the lazy\
  ${noun}.`);
  console.log(`The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`);
}