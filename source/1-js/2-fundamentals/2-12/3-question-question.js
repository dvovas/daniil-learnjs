const num1 = 10;
const num2 = 20;
let result = 0;

result ??= num1 ?? num2;
console.log(result);
