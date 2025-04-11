// Exercise 1:Numbers
const number = 4;
const float = 1.3;

const addition = number + float;
const subtraction = number - float;
const multiplication = number * float;
const division = number / float;
const modulus = number % float;
const exponential = number ** float;

console.log(
  addition,
  subtraction,
  multiplication,
  division,
  modulus,
  exponential
);

//Exercise 2: Boolean and Operators
const twoNumbers = 2 !== 4;

const x = 8;
const y = 12;

console.log(x > y);
console.log(x <= y);
console.log(x === y);
console.log(x != y);

const a = true;
const b = false;

console.log(a && b);
console.log(a || b);
console.log(!a);

let p = 10;

console.log((p += 3));
console.log((p -= 3));
console.log((p *= 3));
console.log((p /= 3));
console.log((p %= 3));
