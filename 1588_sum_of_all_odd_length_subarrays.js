/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  let n = arr.length;
  let total = 0;
  for (let i = 0; i < n; i++) {
    let left = i + 1;
    let right = n - i;
    let totalSubarrays = left * right;
    let oddCount = Math.floor((totalSubarrays + 1) / 2);
    total += arr[i] * oddCount;
  }
  return total;
}; 