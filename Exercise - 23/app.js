// EXERCISE - 23;
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test.
// Five Test Evalutes True Result;
var book = "Namal";
// Test 1: Equality Comparsion 
console.log("Is book == 'Namal'? I predict True.");
console.log(book == 'Namal'); // True
// Test 2: Strict equality Comparsion
console.log("Is book === 'Namal'? I predict True.");
console.log(book === 'Namal'); // True
// Test 3: Less than or Equal Comparsion
console.log("Is book <='Namal'? I predict True.");
console.log(book <= 'Namal'); // True
// Test 4: Greater than or Equal Comparsion
console.log("Is book >='Namal'? I predict True.");
console.log(book >= 'Namal'); // True
// Test 5: Checking truthiness
console.log("Is book? I predict true.");
console.log(book); // True
// Five Test Evalutes False Result;
// Test 6: Inequality Comparsion 
console.log("Is book != 'Namal'? I predict False.");
console.log(book != 'Namal'); // False
// Test 7:  Strict Inequality Comparsion 
console.log("Is book !== 'Namal'? I predict False.");
console.log(book !== 'Namal'); // False
// Test 8: Less than Comparsion
console.log("Is book < 'Namal'? I predict False.");
console.log(book < 'Namal'); // False (Lexicographic comparison)
// Test 9: Greater than Comparsion
console.log("Is book > 'Namal'? I predict False.");
console.log(book > 'Namal'); // False (Lexicographic comparison)
// Test 10: Checking Falsiness
console.log("Is !book? I predict false.");
console.log(!book); // False (Negation of a truthy value)
