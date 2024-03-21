const prompt = require('prompt-sync')()
function readNumber() {
  while (true) {
      let userInput = prompt("Please enter a number:");
      if (userInput == 'CANCEL') {
          return null;
      }
      let number = Number(userInput);
      if (!isNaN(number)) {
          return number;
      }
  }
}
let number = readNumber();
console.log(number);
