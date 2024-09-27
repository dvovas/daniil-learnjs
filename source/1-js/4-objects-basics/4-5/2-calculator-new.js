'use-strict'
function Calculator() {
  this.a = 0;
  this.b = 0;
  this.read = function () {
    this.a = prompt('Введите первое значение', '0');
    this.b = prompt('Введите второе значение', '0');
  };
  this.sum = function () {
    return Number(this.a) + Number(this.b);
  };
  this.mul = function () {
    return this.a * this.b;
  };
}

const calculator = new Calculator();

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
