/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function (nums) {
  let hvCount = 0, arr = [];
  // removing the duplicates
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] !== nums[index + 1]) {
      arr.push(nums[index]);
    }
  }
  // comparing the before and after value for counting valley and hills
  for (let index = 1; index < arr.length - 1; index++) {
    if (arr[index] > arr[index - 1] && arr[index] > arr[index + 1] ||
      arr[index] < arr[index - 1] && arr[index] < arr[index + 1]
    ) {
      hvCount++;
    }
  }
  return hvCount;
};