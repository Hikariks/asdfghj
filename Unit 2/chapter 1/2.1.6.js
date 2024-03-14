const prompt = require('prompt-sync')()
let number = prompt('输入一个数');
let count = 0;
for(i=2; i<number; i++){
  if(number%i==0){
    count += i
  }
}
if(count==0){
  console.log('是一个素数');
}
else{
  console.log('不是素数');
}