"use strict";
// EXERCISE - 35
// Animals: Think of at least three different animals that have a common characteristic. 
Object.defineProperty(exports, "__esModule", { value: true });
// Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
var animals = ["Lion", "Tiger", "Leopard"];
for (var i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
// • Modify your program to print a statement about each animal, such as A dog would make a great pet. 
animals.forEach(function (animal) {
    console.log("A ".concat(animal, " is known for their incredible speed."));
});
// • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
console.log("They all belong to the cat family and share traits like sharp claws, a carnivorous diet, and a similar body structure adapted for hunting.");
