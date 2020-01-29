// easy6-prob10.js

function reverseWords(words) {
  return words
    .split(' ')
    .map(element => {
      if (element.length >= 5) {
        return element.split('').reverse().join('');
      } else {
        return element;
      }
    })
    .join(' ');
}

// all return true
console.log(reverseWords('Professional') === "lanoisseforP");
console.log(reverseWords('Walk around the block') === "Walk dnuora the kcolb");
console.log(reverseWords('Launch School') === "hcnuaL loohcS");















