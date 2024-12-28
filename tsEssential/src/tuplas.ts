const prices: (number | string)[] = [1, 2, 3, 'a'];
prices.push(4);
prices.push('b');

let user: [string, number, boolean];
// user = []; > Error
// user = ['a']; > Error
// user = ['Bi', 15]; > Error
user = ['Bi', 15, true];

const [username, age] = user;
console.log(username);
console.log(age);
