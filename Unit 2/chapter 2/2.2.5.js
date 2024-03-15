const prompt = require('prompt-sync')()
function Calculator() {
  this.a = 0;
  this.b = 0;
  
  this.read = function() {
    this.a = parseFloat(prompt("输入a:"));
    this.b = parseFloat(prompt("输入b:"));
  };
  
  this.sum = function() {
    return this.a + this.b;
  };
  
  this.mul = function() {
    return this.a * this.b;
  };
}

var calculator = new Calculator();
calculator.read();
console.log("Sum:", calculator.sum());
console.log("Mul:", calculator.mul());
