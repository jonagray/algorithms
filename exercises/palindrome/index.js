// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Solution 1
// function palindrome(str) {
//   let reversed = '';
//   for (let char of str) {
//     reversed = char + reversed;
//   }
//   if (reversed === str) {
//     return true;
//   } else {
//     return false;
//   }
// }

// Solution 2
function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1]
  });
} // What is happening here, is we are turning the string into an array, with each index being a character. Then, we use the .every() helper, which returns a boolean if each iteration of it returns true. Char argument is our starting value (beginning of the array), and "i" is our index. We are returning true for each character if it is equal to the string argument at str.length - i - 1, meaning we start at the end of the array, and decrement by 1 each time.

module.exports = palindrome;
