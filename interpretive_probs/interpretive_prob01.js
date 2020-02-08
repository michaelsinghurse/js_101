// interpretive_prob01.js

function lightsOn(count) {
  let lights = [];
  
  for (let index = 0; index < count; index += 1) {
    lights.push(false);
  }
  
  for (let pass = 1; pass <= count; pass += 1) {
    lights = lights.map((element, index) => {
      if ((index + 1) % pass === 0) {
        return !element;
      } else {
        return element;
      }
    });
  }

  return lights
    .map((element, index) => element ? index + 1 : element)
    .filter(element => element);
}

console.log(lightsOn(2));
console.log(lightsOn(3));
console.log(lightsOn(4));
console.log(lightsOn(5));
console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

