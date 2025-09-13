/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
  let vowel = new Map();
  let consonant = new Map();
  let set = new Set(['a', 'e', 'i', 'o', 'u']);
  let vMax = 0, cMax = 0;
  for (let str of s) {
    if (set.has(str)) {
      const count = vowel.get(str) || 0;
      vowel.set(str, count + 1);
      vMax = Math.max(vMax, vowel.get(str));
    }
    else {
      const count = consonant.get(str) || 0;
      consonant.set(str, count + 1);
      cMax = Math.max(cMax, consonant.get(str));
    }
  }
  return vMax + cMax;
};

// Input: s = "successes"
// Output: 6
// Explanation:
// The vowels are: 'u'(frequency 1), 'e'(frequency 2).The maximum frequency is 2.
// The consonants are: 's'(frequency 4), 'c'(frequency 2).The maximum frequency is 4.
// The output is 2 + 4 = 6.