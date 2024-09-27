'use-strict';
const menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};

for (let obj in menu) {
  let whatType = typeof menu[obj];
  let n = 0;
  if (whatType === 'number') {
    menu[obj] = menu[obj] * 2;
  }
}
console.log(menu);
