/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
    let res = [];
    for (let i = left; i <= right; i++) {
        let val = i;
        let isValid = true;
        while (val > 0) {
            const rem = val % 10;
            if (rem === 0 || i % rem !== 0) {
                isValid = false;
                break;
            }
            val = Math.floor(val / 10);
        }
        if (isValid) {
            res.push(i);
        }
    }
    return res;
};