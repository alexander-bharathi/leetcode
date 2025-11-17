/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function (nums, k) {
  let last = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      if (last != -1 && i - last - 1 < k) return false;
      last = i;
    }
  }
  return true;
};
// Input: nums = [1, 0, 0, 0, 1, 0, 0, 1], k = 2
// Output: true
// Explanation: Each of the 1s are at least 2 places away from each other.