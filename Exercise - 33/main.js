// EXERCISE - 33
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
var myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// • Loop through the array.
for (var i = 0; i < myNumbers.length; i++) {
    // Now, we use conditions
    if (myNumbers[i] == 1) {
        console.log("".concat(myNumbers[i], "st"));
    }
    else if (myNumbers[i] == 2) {
        console.log("".concat(myNumbers[i], "nd"));
    }
    else if (myNumbers[i] == 3) {
        console.log("".concat(myNumbers[i], "rd"));
    }
    else if (myNumbers[i] >= 4 && myNumbers[i] <= 9) {
        console.log("".concat(myNumbers[i], "th"));
    }
}
