/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
    let freq = new Map();
    let max = 0;
    for (let num of nums) {
        let count = (freq.get(num) || 0) + 1;
        freq.set(num, count);
        max = Math.max(max, count);
    }
    let sum = 0;
    for (let count of freq.values()) {
        if (count === max) sum += count;
    }
    return sum;
};
// Input: nums = [1,2,2,3,1,4]
// Output: 4
// Explanation: The elements 1 and 2 have a frequency of 2 which is the maximum frequency in the array.
// So the number of elements in the array with maximum frequency is 4.