/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function (nums) {
  let total = 0, right = 0, left = 0;
  for (num of nums) total += num;
  for (let index = 0; index < nums.length; index++) {
    right = total - nums[index] - left;
    if (right === left) {
      return index;
    }
    left += nums[index];
  }
  return -1;
};