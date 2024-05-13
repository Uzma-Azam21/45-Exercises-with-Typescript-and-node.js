// EXERCISE - 21;

// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

// Make Objects data structure for K2-Mountains
interface Mountains {
  Name: string;
  Location: string;
  Ranked: string;
  Height: number;
  Range: string;

}

let Mountains = {
  Name: "K2",
  Location: "Pak-China Border",
  Ranked: "Second",
  Height: 8623,
  Range: "Karakoram",

};
console.log(Mountains);