// medium1-q1.js

let message = 'The Flintstones Rock!';

for (let counter = 0; counter < 10; counter += 1) {
  console.log(message.padStart(message.length + counter, ' '));
}