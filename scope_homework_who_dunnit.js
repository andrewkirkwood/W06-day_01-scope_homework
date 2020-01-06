// 1
// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };
//
// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }
//
// const verdict = declareMurderer();
// // console.log(verdict);

// console will log 'The muderer is Miss Scarlet' as scenario, declareMurderer and verdict are all declared as const and accessed globally.

// 2
// const murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);
// The murdered will be Professor Plum as the murderer variable is decalared as a const and therefore cannot be reassigned.
// * I got this wrong, and should have predicted an error because murderer cannot be reassigned.

// 3
// let murderer = 'Professor Plum';
//
// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }
//
// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);
//
// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// firstVerdict will return Mrs. Peacock as within declareMurderer it is stored within a let variable, murderer and only accessed within the block of declareMurderer.
// secondVerdict will return Professor Plum as within the const secondVerdict murderer is accessed globally.

//4

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';
//
// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }
//
// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);
// the first log will print Miss Scarlet, Professor Plum and Colonel Mustard. Mrs Peacock is not accessed as the let suspectThree within declareAllSuspects is more specific.

// the second log will print Mrs Peacock as Colonel Mustard is stored within the block of declareAllSuspects as a let and cannot be accessed globally. Mrs Peacock is stored globally as suspectThree.

//5
// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };
//
// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// }
//
// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// }
//
// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);

// console log will be "The weapon is the Revolver" as although the scenario is stored as a const, the object parameter is rewritten in the const function changeWeapon and called by passing in 'Revolver'. 'Candle stick' is thus rewritten as 'Revolver'.

//6
// let murderer = 'Colonel Mustard';
//
// const changeMurderer = function() {
//   murderer = 'Mr. Green';
//
//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }
//
//   plotTwist();
// }
//
// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);
// console log will be 'The murderer is Mrs White'. The murderer variable (let) is first declared as 'Colonel Mustard'. The function changeMurderer first reassigns the the above variable as 'Mr Green' but within changeMurderer the variable is reassigned once again to 'Mrs White' via plotTwist. plotTwist is called below the function but is already Mrs White.

//7
// let murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   murderer = 'Mr. Green';
//
//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';
//
//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }
//
//     unexpectedOutcome();
//   }
//
//   plotTwist();
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);
// Mr Green. Within changeMurderer, first the murderer variable is reassigned to 'Mr Green'. plotTwist then uses a let murderer variable and stores is as 'Colonel Mustard' and then unexpectedOutcome changes the murderer to Miss Scarlet. As within plotTwist, the murderer is decalared as a let, it cannot be seen outside of this function and therefore defaults to Mr Green.

//8
// const scenario = {
//   murderer: 'Mrs. Peacock',
//   room: 'Conservatory',
//   weapon: 'Lead Pipe'
// };
//
// const changeScenario = function() {
//   scenario.murderer = 'Mrs. Peacock';
//   scenario.room = 'Dining Room';
//
//   const plotTwist = function(room) {
//     if (scenario.room === room) {
//       scenario.murderer = 'Colonel Mustard';
//     }
//
//     const unexpectedOutcome = function(murderer) {
//       if (scenario.murderer === murderer) {
//         scenario.weapon = 'Candle Stick';
//       }
//     }
//
//     unexpectedOutcome('Colonel Mustard');
//   }
//
//   plotTwist('Dining Room');
// }
//
// const declareWeapon = function() {
//   return `The weapon is ${scenario.weapon}.`
// }
//
// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);
// Candle Stick. const changeScenario changes murderer to Mrs Peacock and room to Dining Room. within changeScenario, plotTwist runs with Dining Room passed in, which is conditionally checked against the current room. In this case it is and therefore the murderer changes to Colonel Mustard. unexpectedOutcome within changeScenario then runs with 'Colonel Mustard' and within the function this input is conditionally checked for a match with the currently stored murderer. In this case its a match and so unexpectedOutcome then reassigns the weapon to Candle Stick.

//9
let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);
// The answer is Professor Plum. Within the if statement, the conditional is a match and a new let murderer is created as Mrs Peacock. But this let murderer is not accessible outside the block of the if statement. So therefore when the verdict is called then it only sees the globally scoped variable murderer, "Professor Plum".
