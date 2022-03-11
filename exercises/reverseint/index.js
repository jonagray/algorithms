// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Solution 2
function reverseInt(n) {
  const reversed = n.toString().split('').reverse().join('');
  return parseInt(reversed) * Math.sign(n);
}

// Solution 1
// function reverseInt(n) {
//   if (n === 0) {
//     return 0;
//   }

//   if (Math.sign(n) === 1) { // It is a positive number
//     let str = n.toString();
//     let reversed = "";
//     for (let char of str) {
//       reversed = char + reversed;
//     };
//     return parseInt(reversed);
//   }

//   if (Math.sign(n) === -1) { // It is a negative number
//     let str = n.toString();
//     let reversed = "";
//     for (let char of str) {
//       reversed = char + reversed;
//     };
//     let theNum = parseInt(reversed);
//     return -theNum;
//   }
// }

module.exports = reverseInt;
