// EXERCISE - 39
// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Creating a function with parameters which return a values in string

function city_country(city: string, country: string) : string{
  return `${city}, ${country}`;
}
// Call your function with at least three city-country pairs, and print the value that’s returned.

// Calling a function and print the returned value:

console.log(city_country("Hunza", "Pakistan"));

console.log(city_country("New York", "USA"));

console.log(city_country("Canberra", "Australia"));
