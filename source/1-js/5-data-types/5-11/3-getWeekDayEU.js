const getWeekDay = function (dates) {
  // const days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

  if (dates.getDay() === 0) {
    return 7;
  } else {
    return dates.getDay();
  }
};

const date = new Date(2012, 0, 3);

console.log(getWeekDay(date));
