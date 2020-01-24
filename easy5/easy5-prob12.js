// easy5-prob12.js

const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = MINUTES_PER_HOUR * HOURS_PER_DAY;

function afterMidnight(militaryTime) {
  let hours = Number(militaryTime.substring(0, militaryTime.indexOf(':')));
  let minutes = Number(militaryTime.substring(militaryTime.indexOf(':') + 1));

  let totalMinutes = (hours * MINUTES_PER_HOUR) + minutes;

  if (totalMinutes === MINUTES_PER_DAY) {
    totalMinutes = 0;
  }

  return totalMinutes;
}

function beforeMidnight(militaryTime) {
 let totalMinutes = MINUTES_PER_DAY - afterMidnight(militaryTime);

 if (totalMinutes === MINUTES_PER_DAY) {
   totalMinutes = 0;
 }

 return totalMinutes;
}

// all should return true
console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);
