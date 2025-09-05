/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function countKConstraintSubstrings(s, k) {
	let substrings = 0;
	const constraint = { 0: 0, 1: 0 };
	for (let left = 0, right = 0; right < s.length; right++) {
		constraint[s[right]]++;
		while (constraint['0'] > k && constraint['1'] > k) {
			constraint[s[left]]--;
			left++;
		}
		substrings += right - left + 1;
	}
	return substrings;
}
// Input: s = "10101", k = 1;
// Output: 12
// Explanation:
// Every substring of s except the substrings "1010", "10101", and "0101" satisfies the k-constraint.