/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let arr = s.split("");
  let left = 0, right = arr.length - 1;

  while (left < right) {
    if (vowels.has(arr[left].toLowerCase()) && vowels.has(arr[right].toLowerCase())) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    } else if (!vowels.has(arr[left].toLowerCase())) {
      left++;
    } else {
      right--;
    }
  }

  return arr.join("");
};

// Input: s = "IceCreAm"
// Output: "AceCreIm"
// Explanation:
// The vowels in s are['I', 'e', 'e', 'A'].On reversing the vowels, s becomes "AceCreIm".