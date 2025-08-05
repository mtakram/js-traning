const name = "Tariq"
const repoCount = 50;

console.log(name + repoCount + " value");

// String interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`)


const myName = new String("Tariq")
console.log(typeof myName);

// By using this method it will return object instead of string

console.log(myName.length);

// This will return characters length

console.log(myName.toUpperCase());

// This will transform myName value in uppercase

console.log(myName.charAt(2));

// Using this method we can check which character is at 2 index (in arrays and objects index starting with 0)

console.log(myName.indexOf('i'));

// Using this method we can check that 'i' is located at what index

// const newName = myName.substring(-2, 4)
const newName = myName.substring(0, 4)

// This will return 'Tari' starting from 0 to 4 (in this method if you do use -2 for the starting point it will still start from 0)

console.log(newName);

const anOtherName =  myName.slice(-5, 3)

// This will return 'Tar' because it will start from last when you use value in -

console.log(anOtherName);

const newNameOne = "   Akram    "

console.log(newNameOne);
console.log(newNameOne.trim());

// Trim works on extra blank spaces. This will remove extra spaces here.
// trimStart removes spaces from start and trimEnd removes spaces from end


const url = "https:/tariq.com/company%20name"

console.log(url.replace('%20', '-'));

// %20 is a blank space ('%20', '-') here %20 is the character which need to be replaced
// '-' this is the character which would replace

console.log(url.includes('tariq'));

// This will return true (Keep in mind inside '' it should match everything)
// If you do use 'Tariq' is will return false because here T is capital and does not match what you are looking for



