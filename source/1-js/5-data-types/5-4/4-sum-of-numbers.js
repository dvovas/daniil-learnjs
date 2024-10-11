'use-strict';
function sumInput() {
  const value = [];
  let input = 0;
  let sum = 0;
  do {
    input = prompt('Введите число', '0');
    if (input !== null && !Number.isNaN(Number(input)) && input !== '') {
      value.push(Number(input));
    }
  } while (input !== null && !Number.isNaN(Number(input)) && input !== '');
  for (let i = 0; i < value.length; i++) {
    sum = sum + value[i];
  }
  return sum;
}
alert(sumInput());
