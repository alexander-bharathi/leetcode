/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function (nums) {
  let prefixNums = [];
  let timesReturnedtoBound = 0;
  for (let index = 0; index < nums.length; index++) {
    prefixNums[index] = index === 0 ? nums[0] : prefixNums[index - 1] + nums[index];
    if (prefixNums[index] === 0) timesReturnedtoBound++;
  }
  return timesReturnedtoBound;
};