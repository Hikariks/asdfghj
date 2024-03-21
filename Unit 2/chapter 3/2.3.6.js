const prompt = require('prompt-sync')()
function checkSpam(str){
  return str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxx')
}
const str = prompt('输入信息');
console.log(checkSpam(str));