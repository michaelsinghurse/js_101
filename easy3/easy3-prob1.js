// easy3-prob1.js

const crunch = str => {
  if (typeof str !== 'string') {
    console.log('Please only pass strings to this function');
    return;
  }
  
  return str
         .split('')
         .filter((currentValue, index, arr) => {
           if (index === 0) {
             return true;
           } else {
             return currentValue !== arr[index - 1];
           }
         })
         .join('');
};

// all should return true
console.log(crunch('ddaaiillyy ddoouubbllee') === 'daily double');
console.log(crunch('4444abcabccba') === "4abcabcba");
console.log(crunch('gggggggggggggg') === "g");
console.log(crunch('a') === 'a');
console.log(crunch('') === '');
console.log(crunch(1000000) === undefined);

