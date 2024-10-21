const user = {
  name: 'Василий Иванович',
  age: 35,
};

const userJson = JSON.stringify(user);
console.log(userJson);
const normalUser = JSON.parse(userJson);
console.log(normalUser);
