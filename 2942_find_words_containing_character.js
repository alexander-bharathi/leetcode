/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
  let res = [];
  for (let index = 0; index < words.length; index++) {
    if (words[index].includes(x)) res.push(index);
  }
  return res;
};

// Input: words = ["leet", "code"], x = "e"
// Output: [0, 1]