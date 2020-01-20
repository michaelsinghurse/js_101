// easy3-prob2.js

function logInBox(str) {
  let boxWidth = str.length + 4;
  let line1 = '';
  let line2 = '';
  
  for (let i = 1; i <= boxWidth; i += 1) {
    if (i === 1 || i === boxWidth) {
      line1 += '+';
      line2 += '|';
    } else {
      line1 += '-';
      line2 += ' ';
    }
  }
  
  let line3 = '| ' + str + ' |';
  
  console.log(line1);
  console.log(line2);
  console.log(line3);
  console.log(line2);
  console.log(line1);
}


logInBox('To boldly go where no one has gone before.');
logInBox('');

