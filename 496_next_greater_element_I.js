/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    const stack = [];
    const nextGreater = new Map();
    for (let num of nums2) {
        while (stack.length && num > stack[stack.length - 1]) {
            nextGreater.set(stack.pop(), num);
        }
        stack.push(num);
    }
    while (stack.length) {
        nextGreater.set(stack.pop(), -1);
    }
    return nums1.map(num => nextGreater.get(num));
};