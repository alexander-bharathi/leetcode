/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
    let count = 0;
    for (let i = 0; i < k; i++) {
        if (blocks[i] === 'W') count++;
    }
    if (count == 0) return 0;
    let min = count;
    if(k == blocks.length) return min;
    for (let j = k; j < blocks.length; j++) {
        if (blocks[j] === 'W') count++;
        if (blocks[j - k] === 'W') count--;
        min = Math.min(min, count);
    }
    return min;
}; 
// Input: blocks = "WBBWWBBWBW", k = 7
// Output: 3
// Explanation:
// One way to achieve 7 consecutive black blocks is to recolor the 0th, 3rd, and 4th blocks
// so that blocks = "BBBBBBBWBW". 
// It can be shown that there is no way to achieve 7 consecutive black blocks in less than 3 operations.
// Therefore, we return 3.