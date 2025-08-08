/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    const mp = new Map();
    mp.set(0, 1);
    let preSum = 0, cnt = 0;
    for (let num of nums) {
        preSum += num;
        if (mp.has(preSum - k)) {
            cnt += mp.get(preSum - k);
        }
        mp.set(preSum, (mp.get(preSum) || 0) + 1);
    }
    return cnt;
}