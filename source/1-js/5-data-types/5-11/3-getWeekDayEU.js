const getWeekDay = (dates) => dates.getDay() === 0 ? 7 : dates.getDay();

const date = new Date(2012, 0, 3);

console.log(getWeekDay(date));
