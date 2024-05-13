// EXERCISE - 41
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

// Make a function to print each magician name from an array
function show_magicians(magicians: string[]){
  magicians.forEach(name => console.log(name));
  
}
// Make an array which containing magicians name
let magician_names = ["Professor Dumbledore","Hermione Granger", "Harry Potter", "Ron Weasley"]

// Call the function to print each magicians name
show_magicians(magician_names);