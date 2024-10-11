const truncate = function (str, maxlength) {
  let result = str;
  if (result.length > maxlength) {
    result = `${str.substring(0, maxlength - 1)}...`;
    return result;
  } else {
    return result;
  }
};

console.log(truncate('Всем привет!', 20));
console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 20));
