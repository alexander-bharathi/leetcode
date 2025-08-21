/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function (nums, queries) {
  let answer = [];
  nums.sort((a, b) => a - b);
  for (let num of queries) {
    let count = 0, prefix_sum = 0;
    for (let index = 0; index < nums.length; index++) {
      prefix_sum += nums[index];
      if (prefix_sum <= num) count++;
      else break;
    }
    answer.push(count);
  }
  return answer;
};