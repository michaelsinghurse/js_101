// easy5-prob11.js

function hoursAndMinutesToMilitaryString(hours, minutes) {
  let hoursStr = String(hours);
  let minutesStr = String(minutes);

  if (hoursStr.length === 1) {
    hoursStr = '0' + hoursStr;
  }

  if (minutesStr.length === 1) {
    minutesStr = '0' + minutesStr;
  }

  return hoursStr + ':' + minutesStr;
}


function timeOfDay(timeMinutes) {
  if (!Number.isInteger(timeMinutes)) {
    console.log('this function only accepts integers!');
    return '';
  }

  let hours;
  let minutes;

  if (timeMinutes >= 0) {
    hours = Math.floor(timeMinutes / 60);

    if (hours > 24) {
      hours %= 24;
    }

    minutes = timeMinutes % 60;
  } else {
    hours = 24 + Math.floor(timeMinutes / 60);

    if (hours < 0) {
      hours = 24 + (hours % 24);
    }

    minutes = 60 + (timeMinutes % 60);
  }

  return hoursAndMinutesToMilitaryString(hours, minutes);
}


// all should return true
console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");

