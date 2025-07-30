/**
 * @param {number[][]} nums
 * @return {number}
 */
var numberOfPoints = function (nums) {
    let points = new Set();
    for (let [start, end] of nums) {
        for (let index = start; index <= end; index++) {
            points.add(index);
        }
    }
    return points.size;
};