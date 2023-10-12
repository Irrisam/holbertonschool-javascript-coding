const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Welcome to Holberton School, what is your name?\n', (userInput) => {
  console.log(`You name is: ${userInput}`);
  rl.on('close', () => {
    console.log('This important software is now closing\n');
  });
});
