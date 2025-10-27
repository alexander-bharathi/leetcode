/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
  let total = 0;
  for (let i = 0; i < n; i++) {
    let week = Math.floor(i / 7);
    let day = i % 7;
    total += week + day + 1;
  }
  return total;
};
// Input: n = 4
// Output: 10
// Explanation: After the 4th day, the total is 1 + 2 + 3 + 4 = 10.