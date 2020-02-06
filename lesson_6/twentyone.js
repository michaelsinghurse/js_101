 // twentyone.js

const readline = require('readline-sync');
const HIT = 'hit';
const STAY = 'stay';
const BUST = 'bust';
const PLAYER_NAME = 'Player';
const DEALER_NAME = 'Dealer';
const TIE = 'tie';

const CARD_VALUES_ACE_LOW = { 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7,
  8: 8, 9: 9, 10: 10, J: 10, Q: 10, K: 10, A: 1 };

const CARD_VALUES_ACE_HIGH = { 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7,
  8: 8, 9: 9, 10: 10, J: 10, Q: 10, K: 10, A: 11 };

function prompt(msg) {
  console.log(`# ${msg}`);
}

function initializeDeck() {
  return ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
    '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
    '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
    '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
}

function dealOneCard(deck, cards) {
  let randomIndex = Math.floor(Math.random() * deck.length);
  cards.push(deck.splice(randomIndex, 1)[0]);
}

function dealCards(deck, playerCards, dealerCards) {
  dealOneCard(deck, playerCards);
  dealOneCard(deck, dealerCards);
  dealOneCard(deck, playerCards);
  dealOneCard(deck, dealerCards);
}

function joinOr(arr, del = ', ', word = 'or') {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  if (arr.length === 1) return `${arr[0]}`;
  if (arr.length === 2) return `${arr[0]} ${word} ${arr[1]}`;

  let str = '';

  for (let index = 0; index < arr.length; index += 1) {
    if (index !== arr.length - 1) {
      str += `${arr[index]}${del}`;
    } else {
      str += `${word} ${arr[index]}`;
    }
  }

  return str;
}

function cardDisplayString(cards, hideLast = false) {
  let displayStr = joinOr(cards, ', ', 'and');

  if (hideLast) {
    displayStr = displayStr.replace(/and \w/, 'and unknown card');
  }

  return displayStr;
}

function displayCards(playerCards, dealerCards, hideDealer = true) {
  prompt(`Your cards: ${cardDisplayString(playerCards)}`);
  prompt(`Dealer cards: ${cardDisplayString(dealerCards, hideDealer)}`);
}

function hitOrStay() {
  prompt('Would you like to hit or stay? (h/s)');
  let response = readline.question().trim().toLowerCase()[0];
  return response === 'h' ? HIT : STAY;
}

function isBust(cards) {
  let total = cards
    .map(card => CARD_VALUES_ACE_LOW[card])
    .reduce((acc, val) => acc + val);

  return total > 21;
}

function calculateTotal(cards) {
  let totalLow = cards
    .map(card => CARD_VALUES_ACE_LOW[card])
    .reduce((acc, val) => acc + val);

  let totalHigh = cards
    .map(card => CARD_VALUES_ACE_HIGH[card])
    .reduce((acc, val) => acc + val);

  return totalHigh <= 21 ? totalHigh : totalLow;
}

function playersTurn(deck, playerCards, dealerCards) {
  let answer = hitOrStay();

  while (answer === HIT) {
    prompt(`${PLAYER_NAME} hits...`);
    dealOneCard(deck, playerCards);
    displayCards(playerCards, dealerCards);

    if (isBust(playerCards)) return BUST;

    answer = hitOrStay();
  }

  prompt(`${PLAYER_NAME} stays...`);
  return STAY;
}

function dealersTurn(deck, dealerCards, playerCards) {
  let total = calculateTotal(dealerCards);

  while (total < 17) {
    prompt(`${DEALER_NAME} hits...`);
    dealOneCard(deck, dealerCards);
    displayCards(playerCards, dealerCards);

    if (isBust(dealerCards)) return BUST;

    total = calculateTotal(dealerCards);
  }

  prompt(`${DEALER_NAME} stays...`);
  return STAY;
}

function declareWinner(winner) {
  if (winner !== TIE) {
    prompt(`Congratulations, ${winner}!!! You won!!!`);
  } else {
    prompt('It\'s a tie! Neither person won!');
  }
}

function determineWinner(playerCards, dealerCards) {
  let playerTotal = calculateTotal(playerCards);
  let dealerTotal = calculateTotal(dealerCards);

  if (playerTotal > dealerTotal) {
    return PLAYER_NAME;
  } else if (playerTotal < dealerTotal) {
    return DEALER_NAME;
  } else {
    return TIE;
  }
}

function busted(loser) {
  prompt(`${loser} busts!`);
  declareWinner(loser === PLAYER_NAME ? DEALER_NAME : PLAYER_NAME);
}

function bothStay(playerCards, dealerCards) {
  prompt('Let\'s see who won...');
  displayCards(playerCards, dealerCards, false);
  let winner = determineWinner(playerCards, dealerCards);
  declareWinner(winner);
}

/// GAME LOOP BEGINS
prompt('Welcome to 21!');

while (true) {

  let deck = initializeDeck();
  let playerCards = [];
  let dealerCards = [];

  dealCards(deck, playerCards, dealerCards);

  displayCards(playerCards, dealerCards);

  let playerResult = playersTurn(deck, playerCards, dealerCards);

  if (playerResult === BUST) {

    busted(PLAYER_NAME);

  } else if (playerResult === STAY) {

    let dealerResult = dealersTurn(deck, dealerCards, playerCards);

    if (dealerResult === BUST) {

      busted(DEALER_NAME);

    } else if (dealerResult === STAY) {

      bothStay(playerCards, dealerCards);

    }
  }

  prompt('Play again? (y or n)');
  let answer = readline.question().toLowerCase()[0];

  while (answer !== 'y' && answer !== 'n') {
    prompt("Please enter 'y' to play again, or 'n' to quit");
    answer = readline.question().toLowerCase()[0];
  }

  if (answer !== 'y') break;

  console.clear();
}

prompt('Thank you for playing 21!');

