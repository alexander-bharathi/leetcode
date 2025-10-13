# Intuition

The problem asks us to find the **maximum length of a contiguous subarray** with an equal number of `0`s and `1`s.  
A key observation is that if we treat `0` as `-1`, then finding a subarray with equal `0`s and `1`s becomes equivalent to finding a subarray with a **sum of 0**.

# Approach

1. **Transform the array** — Convert all `0`s to `-1`s to simplify the problem into finding the longest subarray with a sum of `0`.
2. **Use prefix sum** — Maintain a running sum (`prefix_sum`) as we iterate through the array.
   - For every `1`, add `+1`.
   - For every `0` (treated as `-1`), subtract `1`.
3. **Track prefix sums using a HashMap (`hm`)**
   - The key idea: if the same `prefix_sum` appears again at a later index, the elements in between must sum to `0`.
   - Store the **first occurrence** of each `prefix_sum` in the map.
   - If `prefix_sum` is seen again, calculate the length of the subarray (`current_index - first_occurrence_index`) and update the maximum length.
4. **Initialization** — Set `hm.set(0, -1)` to handle cases where the subarray starts from index `0`.

This approach ensures each element is processed only once while efficiently tracking potential subarrays.

# Complexity

- **Time complexity:** $$O(n)$$  
  Each element is visited once, and all map operations (get/set) take constant time on average.

- **Space complexity:** $$O(n)$$  
  The HashMap stores prefix sums that can grow proportionally to the array size.

# Code

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  let prefix_sum = 0;
  let max_len = 0;
  let hm = new Map();
  hm.set(0, -1);

  for (let index = 0; index < nums.length; index++) {
    prefix_sum += nums[index] === 0 ? -1 : 1;

    if (hm.has(prefix_sum)) {
      max_len = Math.max(max_len, index - hm.get(prefix_sum));
    } else {
      hm.set(prefix_sum, index);
    }
  }
  return max_len;
};
```
