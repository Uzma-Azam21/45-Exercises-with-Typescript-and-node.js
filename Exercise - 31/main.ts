// EXCERCISE - 31;
// No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.

// Creating a Array
let userNames: string[] = ["Fatima", "Rubab", "Zainab", "Sarah", "Admin"];

// If  the list of users is empty, print the message 
// We need to find some users.
if (userNames.length===0){
  console.log("We need to find some users.");
}

// Remove all of the usernames from your array, and make sure the correct message is printed.
else{
  userNames = [];
  console.log("All user names have been removed from array.");
}