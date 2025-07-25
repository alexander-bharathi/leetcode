/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const totalCount = nums.reduce((a, b) => a + b);
  let leftCount = 0;
  for (let index = 0; index < nums.length; index++) {
    let rightCount = totalCount - leftCount - nums[index];
    if (leftCount === rightCount) {
      return index;
    }
    leftCount += nums[index];
  }
  return -1;
};