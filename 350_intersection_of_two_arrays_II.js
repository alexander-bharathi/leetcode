/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  let res = [], left = 0, right = 0;
  while (left < nums1.length && right < nums2.length) {
    if (nums1[left] === nums2[right]) {
      res.push(nums1[left]);
      left++;
      right++;
    }
    else if (nums1[left] < nums2[right]) {
      left++;
    } else {
      right++;
    }
  }
  return res;
};
// Input: nums1 = [1, 2, 2, 1], nums2 = [2, 2]
// Output: [2, 2]