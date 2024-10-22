const user = {
  name: 'Василий Иванович',
  age: 35,
};

const userString = JSON.stringify(user);
console.log(userString);
const userObject = JSON.parse(userString);
console.log(userObject);
