const prompt = require('prompt-sync')();
num = prompt("数字:  ");
bk = num;
let list = [];
if(num > 1) {
  for(i = 2; i <= num; ++i) {
    while(num % i == 0) {
      num /= i;
      list.push(i)
    }
  }
}
console.log(bk + '=' + list[0] + '*' +list[1] + '*' + list[2]);
