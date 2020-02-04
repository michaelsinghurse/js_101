// medium2_prob04.js

function fridayThe13ths(year) {
  let fri13Count = 0;
  
  for (let month = 1; month <= 12; month += 1) {
    // for Date's month argument, Jan = 0 and Dec = 11
    let date = new Date(year, month - 1, 13);
    
    // getDay() returns 0 for Sunday and 6 for Saturday
    if (date.getDay() === 5) {
      fri13Count += 1;
    }
  }
  
  return fri13Count;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2

