/**
 * @param {number[]} nums
 * @return {number}
 */
var subarraySum = function (nums) {
    let result_sum = 0;
    for (let iIndex = 0; iIndex < nums.length; iIndex++) {
        const start = Math.max(0, iIndex - nums[iIndex]);
        for (let jIndex = start; jIndex < iIndex + 1; jIndex++) {
            result_sum += nums[jIndex];
        }
    }
    return result_sum;
};