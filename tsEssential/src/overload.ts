// Bi => [N,i,c,o] => string => string[]
// [N,i,c,o] => Bi => string[] => string

// Overload functions
export function parse(input: string): string[]; // if (Array.isArray(rtaArray)) {rtaArray.reverse();} > It infers a type
export function parse(input: string[]): string; // if (typeof rtaStr === 'string') {rtaStr.toLowerCase();} > It infers a type
export function parse(input: number): boolean; // if (typeof rtaBoolean === 'number') {rtaBBoolean.valueOf();} > It infers a type

// export function parse(input: string | string[]): string | string[] {
//   if (Array.isArray(input)) {
//     return input.join(''); //> string
//   } else {
//     return input.split(''); //> string[]
//   }
// } > Without overload functions

export function parse(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(''); //> string
  } else if (typeof input === 'string') {
    return input.split(''); //> string[]
  } else if (typeof input === 'number') {
    return true; //> boolean
  }
}

const rtaArray = parse('Bryan');
rtaArray.reverse();
console.log('rtaArray', 'Bryan => ', rtaArray); //> Bryan =>  [ 'B', 'r', 'y', 'a', 'n' ]

const rtaStr = parse(['B', 'r', 'y', 'a', 'n']);
rtaStr.toUpperCase();
console.log('rtaStr', `['B', 'r', 'y', 'a', 'n'] => `, rtaStr); //> ['B', 'r', 'y', 'a', 'n'] =>  Bryan

const rtaBoolean = parse(12);
rtaBoolean.valueOf();
console.log('rtaBoolean', '12', rtaBoolean); //> 12 => true

// Overload function with unknown must be at the end of it

/* WRONG
declare function fn(x: unknown): unknown;
declare function fn(x: HTMLElement): number;
declare function fn(x: HTMLDivElement): string;
var myELem: HTMLDivElement;
var x = fn(myElem); > x: unknown
*/

/* RIGHT
declare function fn(x: HTMLDivElement): string;
declare function fn(x: HTMLElement): number;
declare function fn(x: unknown): unknown;
var myELem: HTMLDivElement;
var x = fn(myElem); > x: string
*/

// More examples

/* WRONG
interface Example {
  diff(one: string): number;
  diff(one: string, two: string): number;
  diff(one: string, two: string, three: boolean): number;
}
*/

/* RIGHT
interface Example {
  diff(one: string, two?: string, three?: boolean): number;
}
*/

/* WRONG
interface Example {
  utcOffset(): number;
  utcOffset(b: number): Moment;
  utcOffset(b: string): Moment;
}
*/

/* RIGHT
interface Example {
  utcOffset(): number;
  utcOffset(b: number | string): Moment;
}
*/
