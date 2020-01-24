// easy6-prob4.js

function centerOf(str) {
  let strLength = str.length;

  let startIndex;
  let endIndex;

  if (strLength % 2 === 1) {
    startIndex = Math.floor(strLength / 2);
    endIndex = startIndex + 1;
  } else {
    startIndex = (strLength / 2) - 1;
    endIndex = startIndex + 2;
  }

  return str.substring(startIndex, endIndex);
}

console.log(centerOf('I Love JavaScript') === "a");
console.log(centerOf('Launch School') === " ");
console.log(centerOf('Launch') === "un");
console.log(centerOf('Launchschool') === "hs");
console.log(centerOf('x') === "x");

