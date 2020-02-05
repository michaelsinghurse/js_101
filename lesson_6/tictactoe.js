// tictactoe.js

let readline = require('readline-sync');

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const HUMAN_NAME = 'Player';
const COMPUTER_NAME = 'Computer';

const WINNING_LINES = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
    [1, 5, 9], [3, 5, 7]             // diagonals
  ];

function prompt(message) {
  console.log(`# ${message}`);
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

function initializeScore() {
  let obj = { 'games': 0 };
  obj[HUMAN_NAME] = 0;
  obj[COMPUTER_NAME] = 0;
  return obj;
}

function displayBoard(board) {
  console.clear();
  
  prompt(`You are ${HUMAN_MARKER}. ${COMPUTER_NAME} is ${COMPUTER_MARKER}.`);
  
  console.log('');
  console.log('     |     |     ');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}  `);
  console.log('     |     |     ');
  console.log('-----+-----+-----');
  console.log('     |     |     ');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}  `);
  console.log('     |     |     ');
  console.log('-----+-----+-----');
  console.log('     |     |     ');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}  `);
  console.log('     |     |     ');
  console.log('');  
}

function initializeBoard() {
  let board = {};
  
  for (let square = 1; square <= 9; square += 1) {
    board[String(square)] = INITIAL_MARKER;
  }
  
  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function playerChoosesSquare(board) {
  let square;
  
  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board))}):`);
    square = readline.question().trim();
    
    if (emptySquares(board).includes(square)) break;
    
    prompt('Sorry, that\'s not a valid choice.');
  }
  
  board[square] = HUMAN_MARKER;
}

function findAtRiskSquare(line, board, marker) {
  let markersInLine = line.map(square => board[square]);

  if (markersInLine.filter(val => val === marker).length === 2) {
    let unusedSquare = line.find(square => board[square] === INITIAL_MARKER);
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }

  return null;
}

function computerChoosesSquare(board) {
  let square;
 
  // defense 
  for (let index = 0; index < WINNING_LINES.length; index++) {
    let line = WINNING_LINES[index];
    square = findAtRiskSquare(line, board, HUMAN_MARKER);
    if (square) break;
  }
  
  // offense
  if (!square) {
    for (let index = 0; index < WINNING_LINES.length; index++) {
      let line = WINNING_LINES[index];
      square = findAtRiskSquare(line, board, COMPUTER_MARKER);
      if (square) break;
    }
  }
  
  // just pick a random square
  if (!square) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }

  board[square] = COMPUTER_MARKER;
}

function detectWinner(board) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];

    if (
        board[sq1] === HUMAN_MARKER &&
        board[sq2] === HUMAN_MARKER &&
        board[sq3] === HUMAN_MARKER
    ) {
      return HUMAN_NAME;
    } else if (
        board[sq1] === COMPUTER_MARKER &&
        board[sq2] === COMPUTER_MARKER &&
        board[sq3] === COMPUTER_MARKER
    ) {
      return COMPUTER_NAME;
    }
  }

  return null;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function displayMatchStatus(score) {
  prompt('Match Score:');
  prompt(`  ${HUMAN_NAME}: ${score[HUMAN_NAME]}`);
  prompt(`  ${COMPUTER_NAME}: ${score[COMPUTER_NAME]}`);
}

function detectMatchWinner(score) {
  if (score[HUMAN_NAME] === 5) {
    return HUMAN_NAME;
  } else if (score[COMPUTER_NAME] === 5) {
    return COMPUTER_NAME;
  } else {
    return null;
  }
}

function chooseSquare(board, currentPlayer) {
  currentPlayer === HUMAN_NAME ? playerChoosesSquare(board)
                               : computerChoosesSquare(board);
}

function alternatePlayer(currentPlayer) {
  return currentPlayer === HUMAN_NAME ? COMPUTER_NAME : HUMAN_NAME;
}

/// GAME ACTION LOOP BEGINS
let score = initializeScore();

while (true) {
  score.games += 1;
  let board = initializeBoard();
  let currentPlayer = HUMAN_NAME;
  
  while (true) {
    displayBoard(board);
    chooseSquare(board, currentPlayer);
    currentPlayer = alternatePlayer(currentPlayer);
    if (someoneWon(board) || boardFull(board)) break; 
  }
  
  displayBoard(board);
  
  if (someoneWon(board)) {
    let winner = detectWinner(board);
    prompt(`${winner} won!`);
    score[winner] += 1;
  } else {
    prompt('It\'s a tie!');
  }
  
  if (score.games > 1) {
    displayMatchStatus(score);
    let winner = detectMatchWinner(score);
    if (winner) {
      prompt(`${winner} wins the match!`);
      break;
    }
  }
  
  prompt('Play again? (y or n)');
  let answer = readline.question().toLowerCase()[0];
  
  while (answer !== 'y' && answer !== 'n') {
    prompt("Please enter 'y' to play again, or 'n' to quit");
    answer = readline.question().toLowerCase()[0];
  }
  
  if (answer !== 'y') break;
}

prompt('Thanks for playing Tic Tac Toe!');
