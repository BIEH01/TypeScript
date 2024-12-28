console.log('Math', Math.PI);
console.log('Math', Math.max(1, 2, 3, 4));
// Math.PI = 3.14; > It can be modified

class MyMath {
  static readonly PI = 3.14;

  static max(...numbers: number[]) {
    return numbers.reduce((max, item) => (max >= item ? max : item), 0);
  }
}

// const math = new MyMath();
// math.PI;
// MyMath.PI = 3.1; > It cannot be modified because of readonly
// console.log('MyMath', MyMath.PI); > It can be call because is static
console.log('MyMath', MyMath.max(12, 22, 23, 43)); //> It can be call because is static
