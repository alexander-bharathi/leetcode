/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
    let left = 0, right = nums.length - 1;
    while (right > left) {
        if (nums[right] % 2 == 0) {
            if (nums[left] % 2 != 0) {
                [nums[right], nums[left]] = [nums[left], nums[right]];
                right--;
                left++;
            } else {  
                left++;
            }
        } else {
            right--;
        }
    }
    return nums;
};

// Input: nums = [3,1,2,4]
// Output: [2,4,3,1]
// Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.