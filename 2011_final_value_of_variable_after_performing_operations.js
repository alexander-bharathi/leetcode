/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  let sum = 0;
  for (let operation of operations) {
    if (operation == 'X++' || operation == '++X') sum += 1;
    else sum -= 1;
  }
  return sum;
};
// Input: operations = ["--X", "X++", "X++"]
// Output: 1
// Explanation: The operations are performed as follows:
// Initially, X = 0.
// --X: X is decremented by 1, X = 0 - 1 = -1.
// X++: X is incremented by 1, X = -1 + 1 =  0.
// X++: X is incremented by 1, X = 0 + 1 =  1.