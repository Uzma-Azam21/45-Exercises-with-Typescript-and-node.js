// EXERCISE - 15;

// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

let guestList: string[]= ["Fatima", "Rubab", "Alishba", "Kainat", "Iqra"];

let notCome: string= "Alishba";
let newGuest: string= "Sarah";
guestList[2] = newGuest;

guestList.forEach(oneGuest => console.log(`Assalam O Alaikum ${oneGuest}, We're hosting a dinner party, and we'd love for you to be a part of it.`));

console.log(`Miss ${notCome} will not be come for dinner.`);