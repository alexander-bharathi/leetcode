// Set approach
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let set1 = new Set(nums1);
    let result_set = new Set();
    for (num of nums2) {
        if (set1.has(num)) {
            result_set.add(num);
        }
    }
    return Array.from(result_set);
};
// Two pointers
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);

    const result_set = new Set();
    let left = 0;
    let right = 0;

    while (left < nums1.length && right < nums2.length) {
        if (nums1[left] === nums2[right]) {
            result_set.add(nums1[left]);
            left++;
            right++;
        } else if (nums1[left] < nums2[right]) {
            left++;
        } else {
            right++;
        }
    }
    return Array.from(result_set);
};