// EXERCISE - 45
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature.

// Create a car object with optional option;
type car = {
  manufacture: string;
  model: string;
  [key: string]: any;
};
// Add additional option to the car object
function createCar(
  manufacture: string,
  model: string,
  optional: Record<string, any>
): car {
  return {
    manufacture,
    model,
    ...optional,
  };
}
// Call the function to create Car Objects
const myCar: car = createCar("Honda", "Camry", { color: "Blue", year: "2021" });

// Print the Object that’s returned to make sure all the information was stored correctly.
console.log(myCar);
