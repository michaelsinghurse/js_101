// easy6-prob9.js

function reverseSentence(sentence) {
  if (typeof sentence !== 'string') {
    console.log('Please only pass strings to this function.');
    return;
  }  
  
  let splitArray = sentence.split(' ');
  let splitNoSpacesArray = [];
  
  splitArray.forEach(element => {
    if (element !== '') {
      splitNoSpacesArray.push(element);
    }
  });
  
  return splitNoSpacesArray.reverse().join(' ');
}


// all should return true
console.log(reverseSentence('') === "");
console.log(reverseSentence('Hello World') === "World Hello");
console.log(reverseSentence('Reverse these words') === "words these Reverse");
console.log(reverseSentence('     ') === '');
console.log(reverseSentence('here  are  two  spaces') === 'spaces two are here');
console.log(reverseSentence(123) === undefined);
console.log(reverseSentence('  leading trailing spaces  ') === 'spaces trailing leading');

