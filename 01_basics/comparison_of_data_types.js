console.log('01' > 1);
console.log('1' > 1);
// Js ne khudse convert krdia in strings ko number me

console.log('32' > 3);

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

/**
 * The reason is that an equality operator(==) & comparison operator(>,<,>=,<=) work differently. 
 * 
 * Comparisons convert null to a number, treating it as 0
 */

console.log(undefined > 0); //false
console.log(undefined == 0); //false
console.log(undefined >= 0); //false