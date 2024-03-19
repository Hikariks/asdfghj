const prompt = require('prompt-sync')()
function readNumber(){
  userInput = prompt('输入一个值');
  while (true){
    if (userInput === null || userInput.trim() === "CANCEL") {
      return null;
  }
  if (!isNaN(userInput) && !isNaN(parseFloat(userInput))) {
      return Number(userInput);
  }
  if (typeof userInput == String){
    
  }
}
}
console.log(readNumber());