const vasya = { name: 'Вася', age: 25 };
const petya = { name: 'Петя', age: 30 };
const masha = { name: 'Маша', age: 29 };

const arr = [vasya, petya, masha];
const sum = arr.reduce((total, current) => total + current.age, 0);
const getAvarageAge = sum / arr.length;
console.log(sum);
console.log(getAvarageAge);
