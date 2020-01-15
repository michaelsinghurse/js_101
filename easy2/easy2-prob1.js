// easy2-prob1.js

/*
Problem
- create function greetings(arr, obj)
- Input
  - arg1 = array with > 1 element.
  - arg2 = object with keys 'title' and 'occupation'
  - need to validate input? No.
- Output
  - returns string message
  - function does NOT log it.
- Requirements
  - join the elements of the array to produce a name
  - use the values of object 'title' 'occupation' in the greeting

Examples
#1
console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.

#2
console.log(
  greetings(['John', 'Smith'], {title: 'Senior', occupation: 'Developer'})
);
// logs Hello, John Smith! Nice to have a Senior Developer around.

Data Structure
String

Algorithm
- Assuming we don't have to validate the entry
- Return a template literal with three values. The first is a joining of the
... elements of array with a space. The second is the value of the title. The
... third is the occupation
*/

const greetings = (arr, obj) => {
  return `Hello, ${arr.join(' ')}! Nice to have a ${obj.title} ` + 
    `${obj.occupation} around.`;
};

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);

console.log(
  greetings(['John', 'Smith'], {title: 'Senior', occupation: 'Developer'})
);