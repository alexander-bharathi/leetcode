/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function (ranges, left, right) {
    for (let num = left; num <= right; num++) {
        let covered = false;
        for (let [start, end] of ranges) {
            if (num >= start && num <= end) {
                covered = true;
                break;
            }
        }
        if (!covered) return false;
    }
    return true;
};