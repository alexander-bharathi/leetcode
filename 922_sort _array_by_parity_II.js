/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  let i = 0, j = 1, n = nums.length;
  while (i < n && j < n) {
    if (nums[i] % 2 === 0) {
      i += 2;
    } else if (nums[j] % 2 === 1) {
      j += 2;
    } else {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i += 2;
      j += 2;
    }
  }
  return nums;
};
// Input: nums = [4, 2, 5, 7]
// Output: [4, 5, 2, 7]
// Explanation: [4, 7, 2, 5], [2, 5, 4, 7], [2, 7, 4, 5] would also have been accepted.