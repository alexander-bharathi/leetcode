/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let first = -Infinity, second = -Infinity, third = -Infinity;
  for (let num of nums) {
    if (num == first || num == second || num == third) continue;
    if (num > first) {
      third = second;
      second = first;
      first = num;
    } else if (num > second) {
      third = second;
      second = num;
    } else if (num > third) {
      third = num;
    }
  }
  return third == -Infinity ? first : third;
};

// Input: nums = [3, 2, 1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2.
// The third distinct maximum is 1.