/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function (s) {
  const vowelIndex = { a: 0, e: 1, i: 2, o: 3, u: 4 };
  let state = 0;                // bitmask for vowel parity
  const seen = new Map();
  seen.set(0, -1);              // base case: empty prefix
  let maxLen = 0;
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (vowelIndex.hasOwnProperty(ch)) {
      // toggle the corresponding vowel bit
      state ^= (1 << vowelIndex[ch]);
    }

    // if state seen before, calculate substring length
    if (seen.has(state)) {
      maxLen = Math.max(maxLen, i - seen.get(state));
    } else {
      // store first occurrence of this state
      seen.set(state, i);
    }
  }
  return maxLen;
};
