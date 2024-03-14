const prompt = require('prompt-sync')()
let height = prompt('输入高度');
let half = parseInt(height/2)+1;
for(i=1; i<=height; i++){
  line=''
  if(i<=half){
    for(j=1; j<=half-i; j++){
      line+=' '
    }
    for(j=1; j<=2*i-1; j++){
      line+='*'
    }
  }
  else {
    for(j=1; j<=i-half; j++){
      line+=' '
    }
    for(j=1; j<=(height-i)*2+1; j++){
      line+='*'
    }
  }
  console.log(line);
}
