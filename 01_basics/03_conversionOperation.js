let score = null

console.log(typeof score)

let valueInNumber = Number(score)

console.log(typeof valueInNumber)
console.log(valueInNumber)

// If we assign a variable with null value it will give us 

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = "43ywertqe"
let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn);

// If we convert variable value to Boolean
// if the value is 0 it will return false but if the value is other than 0 it will return 1 no matters if its in minus(-100)
// if the value is "" it will return false but it something in it it will return true

let someNumber = 33
let stringSomeNumber = String(someNumber)

console.log(stringSomeNumber)
console.log(typeof stringSomeNumber);

let newNumber = 3
let nagativeNewNumber = -newNumber;

console.log(nagativeNewNumber)

// This will convert number into negative value


let firstName = "Tariq"
let lastName = " Akram"

console.log(firstName + lastName)

// This will concatinate both strings, here + is concatinating both strings


/***************** Operations ***************/

console.log(2 + 1)
// This will return 3
console.log("2" + 1);
/* This will return 21 instead of 3 because javascript runs from top to bottom and left to right 
   so if compiler found out string first it will concatinate instead of math operation */

console.log(2 + 2 + "1");
/* This will return 41 instead of 5 because javascript concatinate after summing up 2 + 2 */

// Postfix increment

let x = 3;
let y = x++;

console.log(`x:${x}, y:${y}`)

// Here you can see the y value is 3 and x value is 4, this is because increment
// operator increments and return the value before incrementing


// Prefix increment

let a = 3;
let b = ++a;

console.log(`a:${a}, b:${b}`)

// Here you can see the y value is 4 and x value is also 4, this is because increment
// operator increments and return the value after incrementing