/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  let n = nums.length;
  let ops = 0;
  if (n < 3) return nums.every(x => x === 1) ? 0 : -1;
  for (let i = 0; i <= n - 3; i++) {
    if (nums[i] === 0) {
      nums[i] ^= 1;
      nums[i + 1] ^= 1;
      nums[i + 2] ^= 1;
      ops++;
    }
  }
  return (nums[n - 2] === 0 || nums[n - 1] === 0) ? -1 : ops;
};

// Input: nums = [0, 1, 1, 1, 0, 0]
// Output: 3
// Explanation:
// We can do the following operations:
// Choose the elements at indices 0, 1 and 2. The resulting array is nums = [1, 0, 0, 1, 0, 0].
// Choose the elements at indices 1, 2 and 3. The resulting array is nums = [1, 1, 1, 0, 0, 0].
// Choose the elements at indices 3, 4 and 5. The resulting array is nums = [1, 1, 1, 1, 1, 1].