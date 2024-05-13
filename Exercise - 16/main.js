// Exercise 16;
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.
var guestList = ["Fatima", "Rubab", "Alishba", "Kainat", "Iqra"];
// Create a variable for guest who can't come for dinner.
var notCome = "Alishba";
// Create a varible for new guest replacing by 'Alishba'.
var newGuest = "Sarah";
guestList[2] = newGuest;
// Print the message for guest who can't come.
console.log("Miss ".concat(notCome, " will not be come for dinner."));
// Adding a new guest at beginning index of array.
guestList.unshift("Zainab");
// Adding a new guest at ending index of array.
guestList.push("Razia");
// Get a middle index of guest list array.
var middleIndex = Math.floor(guestList.length / 2);
// Adding a new guest at middle index of array
guestList.splice(middleIndex, 0, "Farah");
// Print message for Updated List.
console.log("Updated List of our new guests.");
// Sending a new inivitation for our guests.
guestList.forEach(function (oneguest) { return console.log("Assalam O Alaikum, ".concat(oneguest, ", You're invited for a fabulous dinner soiree! Good food, great company. Your presence would make it even more memorable.")); });
// Print the message for secured bigger table.
console.log("Great News! We've secured a bigger table, means we can invite even more people to join us! Can't wait to celebrate dinner with everyone!");
