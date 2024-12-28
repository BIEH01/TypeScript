(() => {
  // let myNumber: number = undefined;
  // let myString: String = null;
  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null;
  myNumber = 12;

  let myString: string | undefined = undefined;
  myString = 'Hello';

  function hi(name: string | null) {
    let hello = 'Hi ';
    if (name) {
      hello += name;
    } else {
      hello += 'nobody';
    }
    console.log(hello);
  }

  function hello(name: string | null) {
    let hi = 'Hello ';
    hi += name?.toLocaleLowerCase() || 'nobody';
    console.log(hi);
  }

  hi('Bryan');
  hi(null);

  hello('Bryan');
  hello(null);
})();
