let number = 0;
do {
  number = prompt('Введите число', '');
  if (!number) {
    break;
  }
} while (number <= 100);
if (number > 100) {
  alert('Вы ввели правильное число');
}
