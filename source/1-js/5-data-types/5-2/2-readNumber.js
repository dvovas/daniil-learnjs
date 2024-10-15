'use-strict';
function readNumber() {
  let value;
  const number = Number(value);
  do {
    value = prompt('Введите число', '0');
  } while (Number.isNaN(Number(value)));
  if (number === null || value === '') {
    return 'Число: null';
  } else if (typeof number === 'number') {
    return `Число: ${value}`;
  }
}
alert(readNumber());
