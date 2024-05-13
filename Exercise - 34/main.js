// EXERCISE  34
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
var Pizza = ["BBQ Chicken Pizza", "Margherita Pizza", "Veggie Pizza"];
// Print only names of Pizza
for (var i = 0; i < Pizza.length; i++) {
    console.log(Pizza[i]);
}
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. 
for (var i = 0; i < Pizza.length; i++) {
    console.log("I like to eat ".concat(Pizza[i], "."));
}
// •  Add a line at the end of your program, outside the for loop, that states how much you like pizza. 
console.log("\nPizza holds a special place in my heart, its irresistible combination of flavors always bring me joy, making it my ultimate comfort food. Whenever I indulge in a slice, it's like a little slice of happiness that I can't help but savor.");
console.log("I really love pizza.");
