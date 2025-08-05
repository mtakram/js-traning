// JavaScript is a dynamically typed language. 
// Because data type will automatically assigned at the time of compilation or code execution.


// Primitive Data Types (Call by value)
// This type of data copy the value not original value

// String, Number, Boolean, null, undefined, Symbol, BigInt

// Following will return

// string = string
// number = number
// boolean = boolean
// null = object
// undefined = undefined
// symbol = symbol
// BigInt = bigint

const score = 100;
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(typeof id);

console.log(id == anotherId);
// This will return false because we are making it unique by using Symbol

const bigNumber = 34567272882828828n

console.log(typeof bigNumber);


// Non-primitive Data Types / Refrence Data 

// Array, Objects, functions

// Following will return

// array = object
// object = object
// function = function (we call it object function)


const heros = ["Ammar", "Zulifqar", "Murtaza"]

console.log(typeof heros);


let myObj = {
    name: "Tariq",
    ager: 35
}

console.log(typeof myObj);

let myFunction = function(){
    console.log("Hello World")
}

console.log(typeof myFunction);
