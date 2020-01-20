// easy3-prob8.js

function getGrade(num1, num2, num3) {
  let average = (num1 + num2 + num3) / 3;
  
  let grade = '';
  
  if (average >= 90) {
    grade = 'A';
  } else if (average >= 80) {
    grade = 'B';
  } else if (average >= 70) {
    grade = 'C';
  } else if (average >= 60) {
    grade = 'D';
  } else {
    grade = 'F';
  }
  
  return grade;
}

// all should return true
console.log(getGrade(95, 90, 93) === 'A');
console.log(getGrade(50, 50, 95) === 'D');

