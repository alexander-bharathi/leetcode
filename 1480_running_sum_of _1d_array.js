/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    let running_arr = [];
    for (let index = 0; index < nums.length; index++) {
        running_arr[index] = index === 0 ? nums[index] : running_arr[index - 1] + nums[index];
    }
    return running_arr;
};