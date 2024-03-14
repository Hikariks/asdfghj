const prompt = require('prompt-sync')()
let number = prompt('输入数字');
for(i=1; i<=number; i++){
  if(number % i == 0){
    let rest = number/i;
    console.log(i, rest);
  }
}
