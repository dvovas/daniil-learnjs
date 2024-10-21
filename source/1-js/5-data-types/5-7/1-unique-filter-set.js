const set = new Set();
function unique(arr) {
  for (const value of arr) {
    set.add(value);
  }
  return Array.from(set);
}

const values = ['Hare', 'Krishna', 'Hare', 'Krishna',
  'Krishna', 'Krishna', 'Hare', 'Hare', ':-O'];

console.log((unique(values)));
