let shuffle = (arr) =>{
  arr.sort((a,b)=>Math.random()-0.5)
}

let arr = [1, 2, 3];

shuffle(arr);
// arr = [3, 2, 1]
console.log(arr);
shuffle(arr);
// arr = [2, 1, 3]
console.log(arr);
shuffle(arr);
// arr = [3, 1, 2]
// ...
console.log(arr);