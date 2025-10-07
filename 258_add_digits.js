/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  let sum = 0;
  while (num != 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
    if (num == 0 && sum >= 10) {
      num = sum;
      sum = 0;
    }
  }
  return sum;
};

// Example 1:
// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 -- > 3 + 8 -- > 11
// 11 -- > 1 + 1 -- > 2
// Since 2 has only one digit, return it.