let number = 0;
while (number <= 100) {
  number = prompt('Введите число', '');
  if (!number) {
    break;
  }
}
if (number > 100) {
  alert('Вы ввели правильное число');
}
