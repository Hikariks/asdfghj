let count = (s) =>{
  return Object.values(s).length
}
let user = {
  name: 'John',
  age: 30
};

console.log( count(user) ); // 2