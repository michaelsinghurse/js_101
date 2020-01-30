// prac_prob14.js

// Given the following data structure return an array containing the colors of 
// the fruits and the sizes of the vegetables. The sizes should be uppercase, 
// and the colors should be capitalized.
// e.g. [["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let arr = [];

Object.values(obj).forEach(fruitObj => {
  if (fruitObj.type === 'fruit') {
    arr.push(fruitObj.colors.map(color => {
      return color[0].toUpperCase() + color.slice(1);
    }));
  } else {
    arr.push(fruitObj.size.toUpperCase());  
  }
});

console.log(arr);