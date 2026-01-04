/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
    const concat = [...s1.split(" "), ...s2.split(" ")];
    const concat_map = new Map();
    const res = [];
    for (const word of concat) {
        concat_map.set(word, (concat_map.get(word) || 0) + 1);
    }
    for (const [key, value] of concat_map) {
        if (value == 1) res.push(key);
    }
    return res;
};