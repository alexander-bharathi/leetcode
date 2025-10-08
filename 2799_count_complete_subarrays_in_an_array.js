/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function(nums) {
    const totalDistinct = new Set(nums).size; 
    const freq = new Map();
    let left = 0, right = 0, count = 0, distinct = 0;
    while (right < nums.length) {
        freq.set(nums[right], (freq.get(nums[right]) || 0) + 1);
        if (freq.get(nums[right]) === 1) distinct++;
        while (distinct === totalDistinct) {
            count += nums.length - right;
            freq.set(nums[left], freq.get(nums[left]) - 1);
            if (freq.get(nums[left]) === 0) distinct--;
            left++;
        }
        right++;
    }
    return count;
};
// Example 1:
// Input: nums = [1,3,1,2,2]
// Output: 4
// Explanation: The complete subarrays are the following: [1,3,1,2], [1,3,1,2,2], [3,1,2] and [3,1,2,2]