// easy4-prob1.js

console.log(`Teddy is ${calcRandomIntegerBetween(20, 120)} years old!`);

function calcRandomIntegerBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}