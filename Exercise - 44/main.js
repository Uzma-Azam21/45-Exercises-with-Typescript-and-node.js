// EXERCISE - 44
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
// Make a function with a rest parameter that accept items arguments representing our sandwich;
// let items: string[] = ["Chicken", "Cheese", "Tomato", "Cupsicum", "Mayo", "Bread", "Lettuce", "Egg", "Butter"]; 
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a delicious sandwich with the following items:");
    items.forEach(function (singleItem) { return console.log("-" + singleItem); });
    console.log("Have a Tasty Sandwich!");
}
// Calling the function 3 times with 3 different number of arguments;
makeSandwich("Bread", "Butter", "Egg");
makeSandwich("Bread", "Chicken", "Mayo", "Tomato", "Cheese", "Cupsicum");
makeSandwich("Bread", "lettuce", "Chicken", "Mayo");
