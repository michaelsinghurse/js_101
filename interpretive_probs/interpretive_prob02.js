// interpretive_prob2.js

function blanksAndStarsString(blankCount, starCount) {
  return (' ').repeat(blankCount) + ('*').repeat(starCount);
}

function diamond(size) {
  let diamondStr = '';
  let blanks = Math.floor(size / 2);
  let stars = 1;
  
  for (let row = 1; row <= size; row += 1) {
    diamondStr += blanksAndStarsString(blanks, stars);
    
    if (row !== size) {
      diamondStr += '\n';
    }
    
    if (row < Math.ceil(size / 2)) {
      blanks -= 1;
      stars += 2;
    } else {
      blanks += 1;
      stars -= 2;
    }
  }
  
  console.log(diamondStr);
}

diamond(1);
diamond(3);
diamond(9);
diamond(21);