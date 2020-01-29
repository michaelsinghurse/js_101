// easy6-prob12.js

function isBalanced(sentence) {
  let openCount = 0;

  for (let index = 0; index < sentence.length; index += 1) {
    if (sentence[index] === '(') {
      openCount += 1;
    } else if (sentence[index] === ')') {
      openCount -= 1;
    }

    if (openCount < 0) break;
  }

  return openCount === 0;
}

// all should log true
console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

