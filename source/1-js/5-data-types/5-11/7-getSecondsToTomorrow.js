const getSecondToTomorrow = function () {
  const date = new Date();
  const endDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() + 1,
  );
  const startDate = Date.now();
  return Math.round((endDate - startDate) / 1000);
};
console.log(getSecondToTomorrow());
