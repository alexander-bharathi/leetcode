/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
  let freq = new Map();
  for (let value of nums) {
    freq.set(value, (freq.get(value) || 0) + 1)
  }
  for (let [_, count] of freq) {
    if (count % 2 !== 0) {
      return false;
    }
  }
  return true;
};