const score = 400
console.log(score)

// In this case javascript deducted score as a number but problem occurs 
// when its value coming from backend and may be its not number


const balance = new Number(score)
console.log(balance);

// New object always returns object not string, number etc
console.log(typeof balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

// This result will be 400.00 

const otherNumber = 12.8966
console.log(otherNumber.toPrecision(3));

// This will make sure result should be in 3 digits so in this case 12.8966 convert it into 12.9

const hundreds = 1000000
console.log(hundreds.toLocaleString());

// By default it will follow US format and result would be 1,000,000

console.log(hundreds.toLocaleString('en-IN'));

// Now this will follow Indian format and result would be 10,00,000


/****************************** Maths ****************************/

const anotherNumber = 22.51

console.log(Math.round(anotherNumber))

// This will round of value and make it 23

console.log(Math.ceil(anotherNumber))

// This will round of value and make it 23 because it will take top value no matter given value is 22.01

console.log(Math.floor(anotherNumber))

// This will round of value and make it 22 because it will take top value no matter given value is 22.99


const anotherNumberErray = [22, 45, 67, 3];
console.log(Math.min(...anotherNumberErray))
console.log(Math.max(...anotherNumberErray))

// You can't use array directly into maths operations so 
// you have spread operator (...) to pass the array as indivual arguments

const min = 10
const max = 20

console.log(Math.random())

// This will always return value from 0 to 1

console.log(Math.floor(Math.random() * (max - min)) + min)