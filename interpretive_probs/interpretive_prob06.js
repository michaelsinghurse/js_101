// interpretive_prob06.js

function star(size) {
  let threeStarArray = ['*', '*', '*'];

  function logStarsForRow(row) {
    let numSpaces = ((size - 3) / 2) - row + 1;
    let threeStarString = threeStarArray.join(' '.repeat(numSpaces));
    threeStarString = ' '.repeat(row - 1) + threeStarString;
    console.log(threeStarString);
  }

  for (let row = 1; row <= Math.floor(size / 2); row += 1) {
    logStarsForRow(row);
  }

  console.log('*'.repeat(size));

  for (let row = Math.floor(size / 2); row >= 1; row -= 1) {
    logStarsForRow(row);
  }
}

star(7);
star(9);

