const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;

for (const pay in salaries) {
  sum += salaries[pay];
}

console.log(sum);
