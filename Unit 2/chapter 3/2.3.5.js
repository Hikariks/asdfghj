const prompt = require('prompt-sync')();
function ucFirst(str) {
  return str[0].toUpperCase() + str.slice(1);
}
const str = prompt('输入一个东西: ');
console.log(ucFirst(str));
