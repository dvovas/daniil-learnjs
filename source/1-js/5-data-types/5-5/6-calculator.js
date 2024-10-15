function Calculator() {
  this.methods = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
  };
  this.calculate = function (str) {
    const test = str.split(' ');
    const a = Number(test[0]);
    const b = Number(test[2]);
    const c = test[1];
    return this.methods[c](a, b);
  };
  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}
const calc = new Calculator();
calc.addMethod('*', (a, b) => a * b);
calc.addMethod('/', (a, b) => a / b);
calc.addMethod('**', (a, b) => a ** b);
console.log(calc.calculate('5 * 7'));
