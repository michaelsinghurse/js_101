// easy6-prob7.js

const swapName = name => name.split(' ').reverse().join(', ');

// both should return true
console.log(swapName('Joe Roberts') === "Roberts, Joe");
console.log(swapName('Nathanael Singhurse') === "Singhurse, Nathanael");