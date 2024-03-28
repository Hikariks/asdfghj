function getMaxSubSum(arr){
  let maxSum = 0;
  for(let i=0; i<arr.length; i++){
    let count = 0;
    for(let j=i; j<arr.length; j++){
      count += arr[j];
      maxSum = Math.max(maxSum, count)
    }
  }
  return maxSum
}
console.log(getMaxSubSum([1,2,3]));