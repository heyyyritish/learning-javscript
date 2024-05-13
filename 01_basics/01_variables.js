const accountId = 124411
let accountHolderName = "Ritish"
var accountCity = "Ferozpur"
accountPassword = 'ABCD@1234'

let optionalLastName;

// accountId = 4222 Cannot change a constant
accountHolderName = 'RitishRitish'
accountCity = 'Jaipur'
accountPassword = 'newPassword'

/*
Prefer not to use var, use 'let' instead because of blocked and functional scope
*/

console.table([accountId, accountHolderName, accountCity, accountPassword, optionalLastName])