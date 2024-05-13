// EXERCISE - 37
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
// Making function
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I Love Typescript"; }
    console.log("I selected ".concat(size, " size shirt with ").concat(printMessage, " prints on it."));
}
// Calling a function by default values
make_shirt();
// Calling a function now with medium size and default message
make_shirt("Medium");
// A shirt of any size with a different message.
// Calling a function now with small size and print different message
make_shirt("Small", "Coding is my superpower");
