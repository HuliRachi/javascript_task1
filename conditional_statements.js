// Exercise 1: Temperature check
const temperature = 25;

if (temperature < 0) {
  console.log('its freezing');
} else if (temperature > 0 && temperature < 15) {
  console.log('its cold');
} else if (temperature > 16 && temperature < 25) {
  console.log('its mild');
} else {
  console.log('its warm');
}

switch (true) {
  case temperature < 0:
    console.log('its freezing');
    break;
  case temperature > 0 && temperature < 15:
    console.log('its cold');
    break;
  case temperature > 16 && temperature < 25:
    console.log('its mild');
    break;

  default:
    console.log('its warm');

    break;
}

// Exercise 2:Divisibility check
const number = 10;
if (number % 2 === 0 && number % 3 === 0) {
  console.log('its divisible by both');
} else if (number % 2 === 0) {
  console.log('its divisible by 2');
} else if (number % 3 === 0) {
  console.log('its divisible by 3');
} else {
  console.log('not divisible by 3 or 2');
}

switch (true) {
  case number % 2 === 0 && number % 3 === 0:
    console.log('its divisible by both');
    break;
  case number % 2 === 0:
    console.log('its divisible by 2');
    break;
  case number % 3 === 0:
    console.log('its divisible by 3');
    break;

  default:
    console.log('not divisible by 3 or 2');

    break;
}
// Exercise 3:For loops
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log(sum);

const numbers1 = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers1.length; i++) {
  console.log(numbers1[i]);
}
const numbers2 = [3, 7, 2, 5, 10, 6];
let highest;
for (let i = 0; i < numbers2.length - 1; i++) {
  for (let j = 1; j < numbers2.length; j++) {
    if (numbers2[i] < numbers2[j]) highest = numbers2[j];
  }
}
console.log(highest);

// Exercise 4: While loop
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}
let j = 1;
while (j <= 20) {
  if (j % 2 !== 0) {
    console.log(j);
  }
  j++;
}
let k = 1;
while (k <= 50) {
  if (k % 5 === 0) {
    console.log(k);
  }
  k++;
}
// Exercise 5: Do while loop
let h = 1;
do {
  console.log(h);
  h++;
} while (h <= 10);

let sumNumbers = 0;
let l = 1;
do {
  sumNumbers += l;

  l++;
} while (l <= 100);
console.log(sumNumbers);

let userNumber;
do {
  userNumber = parseInt(prompt('enter number greater than 10'));
} while (userNumber <= 10);

console.log(`well done ${userNumber} is greater than 10`);

let secretNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

while (true) {
  let guess = parseInt(prompt('guess a number between 1 and 10'));
  attempts++;
  if (isNaN(guess)) {
    alert('invalid input, try again');
  } else if (guess < 1 || guess > 10) {
    alert('number out of range');
  } else if (guess < secretNumber) {
    alert('too low try again');
  } else if (guess > secretNumber) {
    alert('too high try again');
  } else {
    alert(`congants you guess the number in ${attempts} attempts `);
    break;
  }
}
