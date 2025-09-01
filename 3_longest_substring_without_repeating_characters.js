/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s.length === 0) return 0;
    let left = 0;
    let max_len = 0;
    let char_map = new Map();
    for (let right = 0; right < s.length; right++) {
        if (char_map.has(s[right])) {
            left = Math.max(left, char_map.get(s[right]) + 1);
        }
        char_map.set(s[right], right);
        max_len = Math.max(max_len, right - left + 1);
    }
    return max_len;
};

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.