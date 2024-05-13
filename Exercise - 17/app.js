//Exercise 17;
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
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
// Inform that only two guest will be invited for dinner.
console.log("While we initially planned for a larger gathering, but due to space constraints, we're limiting the guest list to just two.");
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, ", I regret that I didn't accommodate everyone for dinner due to space constraints. Your understanding means a lot to us. Let's plan something soon!"));
}
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
console.log("Invitation to the remaining last two guest.");
guestList.forEach(function (lastTwo) { return console.log("Fortunatey ".concat(lastTwo, ", You're invited to join us for dinner! Hope you can join us for good food and good company.")); });
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
guestList.pop();
guestList.pop();
console.log("Empty List:", guestList);
