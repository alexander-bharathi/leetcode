/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reversePrefix = function (s, k) {
    if (k <= 1) return s;
    return (s.slice(0, k).split('').reverse().join('') + s.slice(k));
};
