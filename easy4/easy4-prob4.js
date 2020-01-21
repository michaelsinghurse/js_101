// easy4-prob4.js

const isPalindrome = text => {
  if (typeof text !== 'string' || text.trim() === '') {
    console.log('Function only accepts arguments that are strings ' + 
    'and have at least one non-whitespace character');
    return;
  }
  
  return text.split('').reverse().join('') === text;
};


// should all return true
console.log(isPalindrome('madam') === true);
console.log(isPalindrome('Madam') === false);
console.log(isPalindrome("madam i'm adam") === false);
console.log(isPalindrome('356653') === true);
