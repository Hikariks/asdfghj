function money(str){
  return + str.slice(1)
}
const prompt = require('prompt-sync')();
const str = prompt('输入钱数')
console.log(money(str))