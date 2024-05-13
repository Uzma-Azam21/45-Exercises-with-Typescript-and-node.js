// EXERCISE -  24;
// write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
var Rose = "Rose";
// Equality;
console.log("Is Rose is equal to Rose?");
console.log(Rose == "Rose"); //True
/// Inequaity;
console.log("\nIs Rose is not equal to Rose?");
console.log(Rose != "Rose"); //False
// • Tests using the lower case function
var uppercaseRose = "ROSE";
console.log("\nIs ROSE is equal to rose after converting to lowercase?");
console.log(uppercaseRose.toLowerCase() == "rose"); //True
console.log("\nIs ROSE is not equal to rose after converting to lowercase?");
console.log(uppercaseRose.toLowerCase() != "rose"); // False
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var twenty = 20;
var thirty = 30;
// Equal to
console.log("\nIs ten is equal to thirty?");
console.log(twenty == thirty); // False
// Not Equal to
console.log("\nIs twenty is not equal to thirty?");
console.log(twenty != thirty); //True
// Greater than
console.log("\nIs twenty is greater than zero?");
console.log(twenty > 0); //True
// Less than
console.log("\nIs thirty is less than 15?");
console.log(thirty < 15); //False
// Greater than or equal to
console.log("\nIs twenty is greater than or equal to 10?");
console.log(twenty >= 10); //True
// Less than or equal to
console.log("\nThirty is less than or equal to 20");
console.log(thirty <= 20); //False
// • Tests using "And" and "OR" operators
// Using (And) Operattors 
console.log("\n Thirty is not equal to 20 and thirty is greater than 20.");
console.log(twenty != 10 && thirty > 20); //True
console.log("\nThirty is equal to 20 and thirty is greater than 40.");
console.log(thirty == 20 && thirty > 40); //False 
// Using || (OR) Operators
console.log("\n 40 is greater than 60 OR 40 is equal to 40");
console.log(40 > 60 || 40 == 40); //True
console.log("\n 40 is greater than 60 OR 40 is not equal to 40");
console.log(40 > 60 || 40 != 40); //False
// • Test whether an item is in a array.
// •  Test whether an item is not in a array
var fruits = ["Grapes", "Banana", "pear"];
// Item is included in array
console.log("\nIs Grapes include in my fruits array");
console.log(fruits.includes("Grapes")); //True
// Items not included in array
console.log("\nIs Grapes not include in my fruits array");
console.log(!fruits.includes("Grapes")); //False
