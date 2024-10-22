const getSecondToday = () => {
  const date = new Date();
  const startDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
  );
  const endDate = Date.now();
  return Math.round((endDate - startDate) / 1000);
};
getSecondToday();
console.log(getSecondToday());
