// easy5-prob9.js

function countOccurrences(arr) {
  let countObj = {};
  
  arr.forEach(element => {
    countObj[element] ? countObj[element] += 1 : countObj[element] = 1;
  });
  
  Object.entries(countObj).forEach(pair => {
    console.log(`${pair[0]} => ${pair[1]}`);
  });
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];
countOccurrences(vehicles);

