/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    const set = new Set();
    for (let num of nums) {
        if (num > 0) {
            set.add(num);
        }
    }
    let i = 1;
    while (true) {
        if (!set.has(i)) return i;
        i++;
    }
};
// Need to optimie to better approach