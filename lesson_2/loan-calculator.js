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

  let rate = Number(rlSync.question());

  while (Number.isNaN(rate) || rate < 0) {
    console.log('\nHuh. Something\'s wrong. Please don\'t include the percent ' +
      'symbol or enter a negative rate.');

    rate = rlSync.question();
  }

  return rate;
}

function getPrincipal() {

  console.log('\nWhat is the loan amount in dollars and cents?');

  let principal = Number(rlSync.question());

  while (Number.isNaN(principal) || principal <= 0) {
    console.log('\nHuh. That input didn\'t look right. Please provide a positive ' +
      'number without the dollar sign.');

    principal = Number(rlSync.question());
  }

  return principal;
}

function getTermInYears() {

  console.log('\nAnd what is the loan duration in years?');

  let term = Number(rlSync.question());

  while (!Number.isInteger(term) || term < 0) {

    console.log('\nHmm. Something is wrong. The duration most be in whole ' +
      'number of years (no decimals) and can\'t be negative or zero');

    term = Number(rlSync.question());
  }

  return term;
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

