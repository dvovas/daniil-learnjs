'use-strict';
const menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};

for (const obj in menu) {
  const whatType = typeof menu[obj];
  if (whatType === 'number') {
    menu[obj] = menu[obj] * 2;
  }
}
console.log(menu);
