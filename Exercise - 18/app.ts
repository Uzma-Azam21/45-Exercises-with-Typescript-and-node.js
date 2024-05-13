// EXERCISE - 18;

//Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

let countriesPlaces: string[] = ["Turkey", "Switzerland", "Maldives", "America", "Brazil"];
console.log("Original Order:", countriesPlaces);

// • Print your array in its original order. 
// • Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical Order:", [...countriesPlaces].sort());

// Show that your array is still in its original order by printing it.
console.log("Still in Original Order:", countriesPlaces);

// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse Order:", [...countriesPlaces].reverse());

// • Show that your array is still in its original order by printing it again.
console.log("Still in Orginal Order:", countriesPlaces);

// • Reverse the order of your list. Print the array to show that its order has changed.
console.log("Original Array Reversed:", countriesPlaces.reverse());

// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Back to Original Order:", countriesPlaces.reverse());

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Sorted in Alphabetical Order:", countriesPlaces.sort());

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("Original Array Reversed Again:", countriesPlaces.reverse());