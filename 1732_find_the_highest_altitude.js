/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let max_alt = 0, curr_sum = 0;
  for (num of gain) {
    curr_sum += num;
    max_alt = Math.max(max_alt, curr_sum);
  }
  return max_alt;
};