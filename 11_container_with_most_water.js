/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0, right = height.length - 1;
    let best = 0;
    while (left < right) {
        const width = right - left;
        const h = Math.min(height[left], height[right]);
        best = Math.max(best, width * h);
        if (height[left] < height[right]) left++;
        else right--;
    }
    return best;
};