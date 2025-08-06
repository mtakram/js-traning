const myArray = [1, 2, 3, 4, 5]

console.log(myArray);

myArray.push(6)

// This will add value at the last

myArray.pop()

// This will remove last item

myArray.unshift(9)

// This will add value in start, keep in mind it will take load because all the other values shifts from there place

myArray.shift()

// This will remove value from start, keep in mind it will take load because all the other values shifts from there place

console.log(myArray.includes(5));

// This will return boolean value, if value exists it will return true else false

console.log(myArray.indexOf(9));

// This will return index position, for instance if value does not exists it will return -1 that because array dont have that value

const welcome = ["Hello", "Tariq"]

console.log(welcome.join(' '));

// This will return a string "Hello Tariq"

const pathParts = ['https:', '', 'example.com', 'blog', 'post'];

const url = pathParts.join('/');

console.log(url); 

// The result will be "https://example.com/blog/post"

console.log(myArray)
