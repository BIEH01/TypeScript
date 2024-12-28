(() => {
  let userId: string | number;
  userId = 123;
  userId = 'abc';

  function greeting(myText: string | number) {
    if (typeof myText === 'string') {
      console.log(`string ${myText.toLowerCase()}`);
    } else {
      console.log(`number ${myText.toFixed(1)}`);
    }
  }
  greeting(1.23);
  greeting('Bryan');
})();
