// easy4-prob4.js

const isRealPalindrome = text => {
  let regexp = /[^a-z0-9]/g;
  let newText = text.toLowerCase().replace(regexp, '');
  
  return isPalindrome(newText);
};

const isPalindrome = text => {
  if (typeof text !== 'string' || text.trim() === '') {
    console.log('Function only accepts arguments that are strings ' + 
    'and have at least one non-whitespace character');
    return;
  }
  
  return text.split('').reverse().join('') === text;
};


// should all return true
console.log(isRealPalindrome('madam') === true);
console.log(isRealPalindrome('Madam') === true);
console.log(isRealPalindrome("Madam, I'm Adam") === true);
console.log(isRealPalindrome('356653') === true);
console.log(isRealPalindrome('356a653') === true);
console.log(isRealPalindrome('123ab321') === false);
console.log(isRealPalindrome('1 2 --- 3 **** 321') === true);