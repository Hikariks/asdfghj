const prompt = require('prompt-sync')();
let minNum = prompt('输入最小值');
let maxNum = prompt('输入最大值');
function random(){
  minNum = Number(minNum);
  maxNum = Number(maxNum)
  console.log(Math.random()*(maxNum - minNum) + minNum);
}
random()
