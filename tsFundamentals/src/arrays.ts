(() => {
  let prices = [1, 2, 3];
  prices.push(4);
  // prices.push('bcd'); > Error
  // prices.push(true); > Error
  // prices.push({}); > Error

  let products = [true, 'a'];
  products.push('b');
  // products.push(12); > Error

  let mixed: (number | string | boolean | object)[] = ['hola', true];
  mixed.push(1);
  mixed.push({});
  mixed.push([]);
  mixed.push(true);
  mixed.push('a');

  let numbers = [1, 2, 3, 4, 5, 6];
  numbers.map((item) => item * 2);
})();
