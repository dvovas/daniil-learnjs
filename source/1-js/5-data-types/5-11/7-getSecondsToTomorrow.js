const getSecondToTomorrow = function () {
  const a = new Date();
  const x = new Date(
    a.getFullYear(),
    a.getMonth(),
    a.getDate() + 1,
  );
  const y = Date.now();
  return Math.round((x - y) / 1000);
};
console.log(getSecondToTomorrow());
