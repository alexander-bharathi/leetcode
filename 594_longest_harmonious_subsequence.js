/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  let freq = new Map();
  let maxLength = 0;
  for (let num of nums) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }
  for (let [num, count] of freq.entries()) {
    if (freq.has(num + 1)) {
      maxLength = Math.max(maxLength, count + freq.get(num + 1));
    }
  }
  return maxLength;
};
// Input: nums = [1, 3, 2, 2, 5, 2, 3, 7]
// Output: 5
// Explanation:
// The longest harmonious subsequence is[3, 2, 2, 2, 3].