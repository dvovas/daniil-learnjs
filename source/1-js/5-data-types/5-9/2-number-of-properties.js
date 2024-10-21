const user = {
  name: 'John',
  age: 30,
};

const count = function (obj) {
  return Object.keys(obj).length;
};

console.log(count(user));
