const getLastDayOfMonth = function (year, month) {
  const date = new Date(year, month);
  date.setMonth(month + 1);
  date.setDate(0);
  return date.getDate();
};
console.log(getLastDayOfMonth(2012, 1));
