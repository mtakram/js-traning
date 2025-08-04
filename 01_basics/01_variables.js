const accountId = 144553;
let accountEmail = "tariq@google.com"
var accountPassword = 12345
accountCity = "Islamabad" // This is not a good practice to use any variable without using var or let

let accountState; // If variable value does not define if would be undefined

// accountId = 32234325 // Javascript does not allow you to reassign the const value

accountEmail = "akram@yahoo.com"
accountPassword = 67890
accountCity = "Lahore"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

// Prefer not to use var because of issue in block and functional scope, use let instead of var
