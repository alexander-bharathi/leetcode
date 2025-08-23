/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  return [...nums, ...nums];
};

// Input: nums = [1, 2, 1]
// Output: [1, 2, 1, 1, 2, 1]