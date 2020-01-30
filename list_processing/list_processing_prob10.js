// list_processing_prob10.js

function transactionsFor(inventoryItem, transactions) {
  return transactions.filter(element => element.id === inventoryItem);
}

function isItemAvailable(inventoryItem, transactions) {
  let transactionsForId = transactionsFor(inventoryItem, transactions);
  
  let inventoryCount = 0;
  
  transactionsForId.forEach(element => {
    if (element.movement === 'in') {
      inventoryCount += element.quantity;
    } else {
      inventoryCount -= element.quantity;
    }
  });
  
  return inventoryCount > 0;
}

// all should return true
let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions) === false);
console.log(isItemAvailable(103, transactions) === false);
console.log(isItemAvailable(105, transactions) === true);

