'use-strict'

function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function () {
    this.a = prompt('Введите прибавляемое значение', '');
    this.value = Number(this.value) + Number(this.a);
  };
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();
alert(accumulator.value);
