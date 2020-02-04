// medium2_prob03.js

function areValidAngles(angle1, angle2, angle3) {
  return angle1 > 0 && 
         angle2 > 0 && 
         angle3 > 0 &&
         angle1 + angle2 + angle3 === 180;
}

function triangle(angle1, angle2, angle3) {
  if (!areValidAngles(angle1, angle2, angle3)) return 'invalid';
  
  let biggestAngle = Math.max(angle1, angle2, angle3);
  
  if (biggestAngle > 90) {
    return 'obtuse';
  } else if (biggestAngle === 90) {
    return 'right';
  } else {
    return 'acute';
  }
}

// all should return true
console.log(triangle(60, 70, 50) === "acute");
console.log(triangle(30, 90, 60) === "right");
console.log(triangle(120, 50, 10) === "obtuse");
console.log(triangle(0, 90, 90) === "invalid");
console.log(triangle(50, 50, 50) === "invalid");













