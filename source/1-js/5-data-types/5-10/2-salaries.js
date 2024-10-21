const salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
const topSalary = function (obj) {
  let highestValue = 0;
  let highestName = null;
  for (const [name, value] of Object.entries(obj)) {
    if (highestValue < value) {
      highestName = name;
      highestValue = value;
    }
  }
  return highestName;
};

console.log(topSalary(salaries));
