const extractCurrencyValue = function (currency) {
  if (Number.isNaN(Number(currency.at(0)))) {
    return currency.substring(1, currency.length);
  }
  return currency;
};
console.log(extractCurrencyValue('$120'));
