const accountId =  1234  
let accountEmail = "sahil@gmail.com"
var accountPassword = "121212"
accountCity = "Kanpur"  // variable declared without using var or let

console.log(accountCity); 

// accountId = 5678 // not allowed as accountId is an constant variable


/*
Prefer not to use var
because of the issue of block scope and functional scope
*/


accountEmail = "manas@gmail.com"
accountPassword = "232323"
accountCity = "Delhi"

console.table([accountId, accountEmail, accountPassword, accountCity]);