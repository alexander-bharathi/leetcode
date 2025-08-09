/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
    let totalOnes = 0;
    for (let ch of s) {
        if (ch === '1') totalOnes++;
    }
    let zerosLeft = 0;
    let onesRight = totalOnes;
    let bestScore = 0;
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === '0') {
            zerosLeft++;
        } else {
            onesRight--;
        }
        bestScore = Math.max(bestScore, zerosLeft + onesRight);
    }
    return bestScore;
};
