/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {
    let answer = new Array(nums.length);
    const totalSum = nums.reduce((acc, cur) => { return acc + cur }, 0);
    let leftSum = 0;
    for (let i = 0; i < nums.length; i++) {
        let rightSum = totalSum - leftSum - nums[i];
        answer[i] = Math.abs(leftSum - rightSum);
        leftSum += nums[i];
    }
    return answer;
};