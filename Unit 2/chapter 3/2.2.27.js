let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log(Object.entries(salaries).sort((a, b) => b[1] -a [1])[0][0])