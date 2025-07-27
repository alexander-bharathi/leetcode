/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function (nums) {
  let totalSum = 0;
  for (let num of nums) totalSum += num;

  let prefixSum = 0;
  let partitionCount = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    prefixSum += nums[i];
    const suffixSum = totalSum - prefixSum;
    if ((prefixSum - suffixSum) % 2 === 0) {
      partitionCount++;
    }
  }
  return partitionCount;
};