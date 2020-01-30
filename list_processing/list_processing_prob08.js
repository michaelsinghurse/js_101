// list_processing_prob08.js

function buyFruit(groceryList) {
  let fruits = [];
  
  groceryList.forEach(element => {
    for (let counter = 1; counter <= element[1]; counter += 1) {
      fruits.push(element[0]);
    }
  });
  
  return fruits;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

