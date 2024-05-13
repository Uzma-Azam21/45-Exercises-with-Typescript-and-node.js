// ExXERCISE - 12;
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var friendsName = ["Urooj", "Miral", "Taliya", "Ayesha"];
// let message = " Hey, Good to see you: "
// for (let i = 0; i < friendsName.length; i++) {
friendsName.forEach(function (friendsName) { return console.log("Hi ".concat(friendsName, ", Good to see you.")); });
