// EXERCISE - 19;
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
var guestList = ["Fatima", "Rubab", "Alishba", "Kainat", "Iqra", "Razia"];
guestList.forEach(function (oneguest) { return console.log("Assalam O Alaikum, ".concat(oneguest, ", You're invited for a fabulous dinner soiree! Good food, great company. Your presence would make it even more memorable.")); });
var lengthGuests = guestList.length;
console.log("Dinner's now for ".concat(lengthGuests, "! Join us for a great time."));
