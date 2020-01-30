// prac_prob05.js

// compute and display the total age of the male members of the family

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let totalAges = Object.values(munsters)
  .filter(obj => obj.gender === 'male')
  .reduce((acc, val) => acc + val.age, 0);

console.log(`The total ages of the male members is: ${totalAges}`);