// prac_prob06.js

// print the following template to the console for each family member.
// (Name) is a (age)-year-old (male or female).

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

Object.keys(munsters).forEach(key => {
  console.log(
    `${key} is a ${munsters[key].age}-year-old ${munsters[key].gender}.`
  );
});