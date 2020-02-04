// medium2_prob05.js

const maxFeatured = 9876543201;

function numberUniqueChars(str) {
  let countObj = {};
  for (let index = 0; index < str.length; index += 1) {
    let char = str[index];
    countObj[char] = true;
  }
  
  return Object.keys(countObj).length;
}

function isFeatured(testNum) {
  return testNum % 2 === 1 &&
         testNum % 7 === 0 &&
         numberUniqueChars(String(testNum)) === String(testNum).length;
}

function featured(base) {
  if (base < 0) return undefined;
  
  if (base >= maxFeatured) {
    return 'There is no possible number that fulfills those requirements.';
  }
  
  let featured = base;
  
  while (true) {
    featured += 1;
    if (isFeatured(featured)) break;
  }
  
  return featured;
}

// all return true
console.log(featured(12) === 21);
console.log(featured(20) === 21);
console.log(featured(21) === 35);
console.log(featured(997) === 1029);
console.log(featured(1029) === 1043);
console.log(featured(999999) === 1023547);
console.log(featured(999999987) === 1023456987);
console.log(featured(9876543200) === 9876543201);
console.log(featured(9876543201) ===
  "There is no possible number that fulfills those requirements.");

