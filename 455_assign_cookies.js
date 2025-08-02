/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    let left = 0, right = 0;
    while (s.length > right && g.length > left) {
        if (s[right] >= g[left]) {
            left++
        }
        right++;
    }
    return left;
};