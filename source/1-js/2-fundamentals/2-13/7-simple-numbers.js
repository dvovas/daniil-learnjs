const n = 10;
for (let i = 2; i <= n; i += 1) {
  let isSimple = true;
  for (let j = 2; j < i; j += 1) {
    if (i % j === 0) {
      isSimple = false;
    }
  }
  if (isSimple) {
    console.log(i);
  }
}
