// loan-calculator.js

let rlSync = require('readline-sync');

greetUser();

let principal = getPrincipal();

let apr = getAPR();

let termYears = getTermInYears();

let monthlyPayment = calculateMonthlyPayment(principal, apr, termYears);

printResults(principal, apr, termYears, monthlyPayment);

function calculateMonthlyPayment(prin, apr, term) {

  let monthlyRate = apr / 100 / 12;
  let termInMonths = term * 12;
  let monthlyPayment;

  if (monthlyRate === 0) {
    monthlyPayment = prin / termInMonths;
  } else {
    monthlyPayment = prin * (monthlyRate /
      (1 - Math.pow((1 + monthlyRate),(-termInMonths))));
  }

  return monthlyPayment.toFixed(2);
}

function getAPR() {

  console.log('\nWhat is the APR (Annual Percentage Rate)?\n' +
    'For example, if the rate is 5.5%, enter 5.5');

  let rate = rlSync.question();

  while (rate.trim() === '' || Number.isNaN(Number(rate)) || Number(rate) < 0) {
    console.log('\nHuh. Something\'s wrong. Please don\'t include the percent ' +
      'symbol or enter a negative rate.');

    rate = rlSync.question();
  }

  return Number(rate);
}

function getPrincipal() {

  console.log('\nWhat is the loan amount in dollars and cents?');

  let principal = rlSync.question();

  while (principal.trim() === '' || Number.isNaN(Number(principal)) ||
         Number(principal) <= 0) {

    console.log('\nHuh. That input didn\'t look right. Please provide a positive ' +
      'number without the dollar sign.');

    principal = rlSync.question();
  }

  return Number(principal);
}

function getTermInYears() {

  console.log('\nAnd what is the loan duration in years?');

  let term = rlSync.question();

  while (term.trim() === '' || !Number.isInteger(Number(term)) ||
         Number(term) < 0) {

    console.log('\nHmm. Something is wrong. The duration most be in whole ' +
      'number of years (no decimals) and can\'t be negative or zero');

    term = rlSync.question();
  }

  return Number(term);
}

function greetUser() {
  console.log('\nWelcome to the Loan Calculator!\n');
}

function printResults(principal, apr, term, payment) {
    console.log('\nFor the following terms...\n' +
      '\tAmount: $' + principal + '\n' +
      '\tAPR: ' + apr + '%\n' +
      '\tDuration: ' + term + ' years\n' +
      'Your monthly payment is: $' + payment + '\n');
}

