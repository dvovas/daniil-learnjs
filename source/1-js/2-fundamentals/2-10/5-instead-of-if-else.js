const login = prompt('Кто вы?', '');
/* eslint-disable */
const message = (login === 'Сотрудник')
  ? 'Привет'
  : (login === 'Директор')
      ? 'Здравствуйте'
      : (login === '')
          ? 'Нет логина'
          : '';
alert(message);
