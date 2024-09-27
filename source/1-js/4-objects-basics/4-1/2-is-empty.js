const schedule = {};

const isEmpty = (obj) => {
  for (const key in obj) {
    return false;
  }
  return true;
};

console.log(isEmpty(schedule));
