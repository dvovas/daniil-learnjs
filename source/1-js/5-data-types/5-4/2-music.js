const styles = [
  'Джаз',
  'Блюз',
];

styles.push('Рок-н-ролл');
styles[Math.floor(styles.length / 2)] = 'Классика';
console.log(styles.shift());
styles.unshift('Рэп', 'Рэгги');

console.log(styles);
