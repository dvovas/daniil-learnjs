const getSecondToday = function () {
  const a = new Date();
  const x = new Date(
    a.getFullYear(),
    a.getMonth(),
    a.getDate(),
  );
  const y = Date.now();
  return Math.round((y - x) / 1000);
};
getSecondToday();
console.log(getSecondToday());
