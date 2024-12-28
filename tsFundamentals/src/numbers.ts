(() => {
  let productPrice = 100;
  productPrice = 12;
  // productPrice = ''; > Error;
  // productPrice = null; > Error;
  console.log('productPrice', productPrice);

  let customerAge: number = 28;
  // customerAge = customerAge + '1'; > Error
  customerAge = customerAge + 1;
  console.log('customerAge', customerAge);

  let productInStock: number;
  // console.log('productInStock', productInStock); > Error
  /*
    if (productInStock > 10) {
      console.log('is greater');
    } > Error
  */

  let discount = parseInt('123');
  console.log('discount', discount);

  let hex = 0xfff;
  console.log('hex', hex);
  let bin = 0b01010;
  console.log('bin', bin);

  // Type in lowercase Number is not right
  const myNumber: number = 10;
})();
