// EXERCISE - 43
// Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
// Make a function to show magicians name
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Make a function through .map(),it will modify array;
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Make an array of magicians name
var magician_names = ["Professor Dumbledore", "Hermione Granger", "Harry Potter", "Ron Weasley"];
// Making a copy of Original array through .slice() function
var copy_magician_names = magician_names.slice();
// Modified the copied array to include "The Great" with their names;
var copy_great_magicians = make_great(copy_magician_names);
// Show both Array Original and Copied
// Original Array
console.log("\nOriginal Array\n");
show_magicians(magician_names);
// Copied Array
console.log("\nCopied Array\n");
show_magicians(copy_great_magicians);
