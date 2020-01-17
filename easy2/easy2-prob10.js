// easy2-prob10.js

/*
Problem
- write a function stringToSignedInteger(str)
- Input
  - string - strings of numbers. optional leading + or -
  - no validation required
- Output
  - number - integer (no decimal)
- Rules
  - Cannot use any built in coercion functions parseInt() and Number()

Examples
console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true

Data Structure
- Object for conversion from string number to numeric number
  - the object should also contains pairs '+': 1, '-': -1
- Number for return value

Algorithm
- split the string at every character into an array
- set a counter equal to zero
- set a answer variable for the return value equal to 0.
- loop while the length of the array is greater than zero
  - pop the last element off the array
  - use the object to look up it's value
  - if it's a + or - sign, mulitple the answer variable by 1 or -1
  - else add the answer variable and the product of the current value and
    10 to the power of the counter variable.
  - increase the counter variable by 1.
- return the answer variable
*/

const stringToSignedInteger = str => {
  let numberAndSignLookup = {
    '+': 1,
    '-': -1,
    '0': 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9
  };

  let arr = str.split('');

  let counter = 0;
  let signedInteger = 0;
  let element;

  while (arr.length > 0) {
    element = arr.pop();

    if (element === '+' || element === '-') {
      signedInteger *= numberAndSignLookup[element];
    } else {
      signedInteger += numberAndSignLookup[element] * Math.pow(10, counter);
    }

    counter += 1;
  }

  return signedInteger;
};

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true
console.log(stringToSignedInteger("0") === 0);      // logs true