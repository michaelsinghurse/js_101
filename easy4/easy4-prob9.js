// easy4-prob9.js

const wordSizes = inputStr => {
  let obj = {};
  
  let inputStrStripped = inputStr.replace(/[^A-Za-z ]/g, '');
  
  inputStrStripped.split(' ').forEach(element => {
    let elementLength = element.length;
    
    if (elementLength > 0) {
      obj.hasOwnProperty(elementLength) ? obj[elementLength] += 1 
                                        : obj[elementLength] = 1;
    }
  });
  
  return obj;
};

console.log(wordSizes('Four score and seven.'));                       
// { "3": 1, "4": 1, "5": 2 }

console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  
// { "3": 5, "6": 3 }

console.log(wordSizes("What's up doc?"));         // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                       // {}
