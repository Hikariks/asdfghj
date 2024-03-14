const prompt = require('prompt-sync')()
let height = prompt('输入高度');
for(i = 1; i <= height; i++){
  line = '';
  for(j = 1; j <= i; j++){
    line += '*'
  }
  console.log(line);
}
