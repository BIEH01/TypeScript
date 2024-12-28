// Generic permits to add a type for the params when unknown, or uni type like promises or axios examples

import { Dog } from './protected';

// function getValue(value: unknown) {
//   return value;
// } > It does not infer a type to result

// function getValue(value: number | string) {
//   return value;
// } > It does not infer a type to result

// function getValue<myType, myType2>(value: myType) {
//   let name: myType2 = 'new name';
//   return value;
// } > It can be two generics

// Promise<boolean>
// axios.get<string[]>

function getValue<T>(value: T) {
  return value;
}

getValue<number>(12).toFixed();
getValue<String>('Hi').toUpperCase();
getValue<number[]>([1, 2, 3, 4]).forEach((item) => console.log(item));

// Dog example
const black = new Dog('black', 'Bi');
getValue<Dog>(black).greeting();
