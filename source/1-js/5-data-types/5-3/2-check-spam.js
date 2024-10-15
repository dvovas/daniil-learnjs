const checkSpam = function (str) {
  const regex = new RegExp('viagra', 'i');
  const regex2 = new RegExp('xxx', 'i');
  return regex.test(str) || regex2.test(str);
};
console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam('innocent rabbit'));
