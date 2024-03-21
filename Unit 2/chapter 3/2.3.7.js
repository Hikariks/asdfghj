const prompt = require('prompt-sync')();
function truncate(str, maxlength){
  if (str.length > maxlength) {
    return str.slice(0, maxlength) + '…' 
  }
}
const str = prompt('输入信息');
const maxlength = prompt('输入最大限度');
console.log(truncate(str, maxlength))