// easy3-prob10.js

const YEAR_ENDINGS = ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'];
const YEAR_ENDINGS_EXCEPTIONS = [11, 12, 13];

function century(year) {
  if (!Number.isInteger(year) || year < 1) {
    console.log('Please pass in a year greater than 0. No decimals.');
    return;
  }
  
  let centuryNum = Math.ceil(year / 100);
  
  let centuryNumEnding = centuryNum % 10;
  
  let centuryStrEnding = YEAR_ENDINGS[centuryNumEnding];
  
  if (YEAR_ENDINGS_EXCEPTIONS.includes(centuryNum % 100)) {
    centuryStrEnding = 'th';
  }
  
  return String(centuryNum) + centuryStrEnding;
}

// all should return true
console.log(century(2000) === "20th");
console.log(century(2001) === "21st");
console.log(century(1965) === "20th");
console.log(century(256) === "3rd");
console.log(century(5) === "1st");
console.log(century(10103) === "102nd");
console.log(century(1052) === "11th");
console.log(century(1127) === "12th");
console.log(century(11201) === "113th");


