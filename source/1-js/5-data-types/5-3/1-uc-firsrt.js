const ucFirst = function (str) {
  const strUpper = str[0].toUpperCase();
  const strLower = str.slice(1, str.length[-1]);
  return `${strUpper}${strLower}`;
};
console.log(ucFirst('вася'));
