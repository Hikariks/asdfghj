let sumSalaries = (s)=>{
  return Object.values(s).reduce((sum, s) => sum += s,0)
}
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
console.log( sumSalaries(salaries) ); // 650