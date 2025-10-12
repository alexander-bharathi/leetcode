/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let answer = Array(nums.length).fill(1);
  let prefix = 1;
  for (let index = 0; index < nums.length; index++) {
    answer[index] *= prefix;
    prefix *= nums[index];
  }
  let suffix = 1;
  for (let index = nums.length - 1; index >= 0; index--) {
    answer[index] *= suffix;
    suffix *= nums[index];
  }
  return answer;
};
