// Function that never stops
const withoutEnd = (): never => {
  while (true) {
    console.log('Never stop learning');
  }
}; //> Never

const fail = (message: string) => {
  throw new Error(message);
};

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'It is string';
  } else if (Array.isArray(input)) {
    return 'It is an array';
  }
  return fail('not match');
}; //> Never

console.log(example('Hi'));
console.log(example([1, 1, 1, 1]));
console.log(example(1212)); // stops
console.log(example('Hi after failure'));
