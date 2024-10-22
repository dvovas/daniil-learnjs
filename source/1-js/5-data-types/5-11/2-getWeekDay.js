const getWeekDay = (dates) => {
  const days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

  return days[dates.getDay()];
};

const date = new Date(2012, 0, 7);

console.log(getWeekDay(date));
