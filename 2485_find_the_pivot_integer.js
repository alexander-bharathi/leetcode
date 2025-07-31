/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
    let total_sum = 0;
    let left_sum = 0;
    for (let i = 1; i <= n; i++) {
        total_sum += i;
    }
    for (let j = 1; j <= n; j++) {
        let right_sum = total_sum - left_sum - j;
        if (right_sum === left_sum) {
            return j;
        }
        left_sum += j;
    }
    return -1;
};