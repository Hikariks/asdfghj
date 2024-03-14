let oddSum = 0;
let evenSum = 0;
for(i=1; i<=100; i++){
  if(i%2==0){
    oddSum += i
  }
  else{
    evenSum += i
  }
}
console.log(oddSum);
console.log(evenSum);