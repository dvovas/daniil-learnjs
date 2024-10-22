const date = new Date(2015, 0, 2);
const getDateAgo = (dates, days) => {
  dates.setDate(dates.getDate() - days);
  return dates.getDate();
};

console.log(getDateAgo(date, 40));
