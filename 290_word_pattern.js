/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    const words = s.split(" ");
    if (pattern.length !== words.length) return false;
    const map = new Map();
    const usedWords = new Set();
    for (let i = 0; i < pattern.length; i++) {
        const ch = pattern[i];
        const word = words[i];
        if (map.has(ch)) {
            if (map.get(ch) !== word) return false;
        } else {
            if (usedWords.has(word)) return false;
            map.set(ch, word);
            usedWords.add(word);
        }
    }
    return true;
};
