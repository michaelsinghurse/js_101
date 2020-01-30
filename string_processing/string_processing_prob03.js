// string_processing_prob03.js

function letterCaseCount(text) {
  let caseCount = { 'lowercase': 0, 'uppercase': 0, 'neither': 0 };
  
  text.split('').forEach(char => {
    if (char >= 'a' && char <= 'z') {
      caseCount.lowercase += 1;
    } else if (char >= 'A' && char <= 'Z') {
      caseCount.uppercase += 1;
    } else {
      caseCount.neither += 1;
    }
  });
  
  return caseCount;
}


console.log(letterCaseCount('abCdef 123'));  
// { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    
// { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         
// { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            
// { lowercase: 0, uppercase: 0, neither: 0 }

