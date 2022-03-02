// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution 1
function reverse(str) {
  return str.split('').reverse().join('');
}

// Solution 2
function reverse(str) {
  let reversed = '';
  for (let character of str) {
    reversed = character + reversed;
    debugger;
  }

  return reversed;
}

//Solution 3
function reverse(str) {
  return str.split('').reduce((reversed, character) => {
    return character + reversed;
  }, ''); // the purpose of reduce is to take an array and reduce it down to a single value | the second argument is a starting initial value for our function. The arrow function here takes that initial value (second argument), and then returns the result of the arrow function, and then uses that return value to be the starting value (second argument) of the next run of the arrow function. The arrow function runs one time for every element in the array.
}

reverse('skeletons');

module.exports = reverse;
