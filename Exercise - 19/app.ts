// EXERCISE - 19;

// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
//  Getting Guest list from exercise 16;

let guestList: string[]= ["Fatima", "Rubab", "Alishba", "Kainat", "Iqra"];

guestList.forEach(oneguest => console.log (`Assalam O Alaikum, ${oneguest}, You're invited for a fabulous dinner soiree! Good food, great company. Your presence would make it even more memorable.`));

let lengthGuests: number = guestList.length;

console.log(`Dinner's now for ${lengthGuests}! Join us for a great time.`);
