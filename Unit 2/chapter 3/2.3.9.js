const prompt = require('prompt-sync')();
function sumInput(){
  let array = [];
  while(true){
    const num = prompt('数字:');
    if(num === '' || num === null)break;
    array.push(+num)
  }
  let sum = 0
  for (num of array){
    sum += num  
  }
    return sum
}
console.log(sumInput());