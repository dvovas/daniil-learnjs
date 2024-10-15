const truncate = function (str, maxLength) {
  let result = str;
  if (result.length > maxLength) {
    result = `${str.substring(0, maxLength - 1)}...`;
    return result;
  }
  return result;
};

console.log(truncate('Всем привет!', 20));
console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 20));
