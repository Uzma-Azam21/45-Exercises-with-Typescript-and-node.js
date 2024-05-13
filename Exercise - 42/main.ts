// EXERCISE - 42
// Great Magicians: Start with a copy of your program from Exercise 41. Call show_magicians() to see that the list has actually been modified.

// Make a function to show magicians name
function show_magicians(magicians: string[]) {
  magicians.forEach(name => console.log(name));
}

// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.

// Make a function through .map(),it will modify array;
function make_great(magicians: string[]) {
  return magicians.map(name => `The Great ${name}`);
}

// Make an array of magicians name
let magician_names = ["Professor Dumbledore", "Hermione Granger", "Harry Potter", "Ron Weasley"];

// Call make_great function to modify magicians names
let great_magicians = make_great(magician_names);

// Call show magicians that show modified list of magicians
show_magicians(great_magicians);
