// medium2_prob01.js

function letterPercentages(someString) {
  let percentages = { 'lowercase': 0, 'uppercase': 0, 'neither': 0 };
  
  for (let index = 0; index < someString.length; index += 1) {
    let char = someString[index];
    
    if (char >= 'a' && char <= 'z') {
      percentages.lowercase += 1;
    } else if (char >= 'A' && char <= 'Z') {
      percentages.uppercase += 1;
    } else {
      percentages.neither += 1;
    }
  }
  
  for (let key in percentages) {
    percentages[key] = 
      String((percentages[key] / someString.length * 100).toFixed(2));
  }
  
  return percentages;
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }