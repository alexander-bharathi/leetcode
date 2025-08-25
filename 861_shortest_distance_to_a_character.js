/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
  let n = s.length;
  let res = new Array(n);
  let prev = -Infinity;
  for (let i = 0; i < n; i++) {
    if (s[i] === c) prev = i;
    res[i] = i - prev;
  }

  prev = Infinity;
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === c) prev = i;
    res[i] = Math.min(res[i], prev - i);
  }
  return res;
};