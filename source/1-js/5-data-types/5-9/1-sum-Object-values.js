const salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

let sum = 0;

const sumSalaries = (obj) => {
  for (const value of Object.values(obj)) {
    sum += value;
  }
  return sum;
};

console.log((sumSalaries(salaries)));
