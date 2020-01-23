// easy5-prob1.js

function dms(degreeNum) {
  if (typeof degreeNum !== 'number' || degreeNum < 0) {
    console.log('Please only pass in non-negative numbers');
    return;
  }
  
  let degrees = degreeNum;
  let minutes = (degrees % 1) * 60;
  let seconds = (minutes % 1) * 60;
  
  let degreeString = Math.floor(degrees) + String.fromCharCode(176) +
    addLeadingZeroIfNeeded(Math.floor(minutes)) + '\'' + 
    addLeadingZeroIfNeeded(Math.round(seconds)) + '"';
    
  return degreeString;
}

function addLeadingZeroIfNeeded(num) {
  if (num < 10) {
      return '0' + num;
  }
  return String(num);
}


// all true
console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"
console.log(dms('0'));          // undefined & logs to console