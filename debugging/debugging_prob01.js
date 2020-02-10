// debugging_prob01.js

let ladder = '';

['head', 'heal', 'teal', 'tell', 'tall', 'tail'].forEach(word => {
  if (ladder !== '') {
    ladder += '-';
  }

  ladder += word;
});

console.log(ladder)  // expect: head-heal-teal-tell-tall-tail