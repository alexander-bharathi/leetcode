/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
  let result = [];
  for (let num of nums) if (num < pivot) result.push(num);
  for (let num of nums) if (num === pivot) result.push(num);
  for (let num of nums) if (num > pivot) result.push(num);
  return result;
};