const getWeekDay = function (dates) {
  const days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

  return days[dates.getDay() - 1];
};

const date = new Date(2012, 0, 3);

console.log(getWeekDay(date));
