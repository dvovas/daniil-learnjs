'use-strict'
const calculator = {
  read() {
    this.a = prompt('Введите первое значение', '0');
    this.b = prompt('Введите второе значение', '0');
  },
  sum() {
    return Number(this.a) + Number(this.b);
  },
  mul() {
    return this.a * this.b;
  },

};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
