/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hm = new Map();
  for (let i = 0; i < nums.length; i++) {
    const val = target - nums[i];
    if (hm.has(val)) {
      return [hm.get(val), i];
    }
    hm.set(nums[i], i);
  }
};