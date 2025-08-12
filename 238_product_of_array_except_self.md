# Intuition

The problem asks us to calculate the product of all elements in the array except for the current index without using division.  
The straightforward approach of multiplying all numbers and dividing by the current element is not allowed, so we need another way.  
We can achieve this by using prefix and suffix products:

- **Prefix product:** product of all elements before the current index.
- **Suffix product:** product of all elements after the current index.
  By multiplying prefix and suffix for each index, we get the required result.

---

# Approach

1. Initialize an output array `answer` with all elements as `1`.
2. Traverse the array from left to right:
   - Maintain a running `prefix` product.
   - Multiply each element in `answer` by the current `prefix`.
   - Update `prefix` with the current element's value.
3. Traverse the array from right to left:
   - Maintain a running `suffix` product.
   - Multiply each element in `answer` by the current `suffix`.
   - Update `suffix` with the current element's value.
4. Return the `answer` array.

---

# Complexity

- **Time complexity:**  
  $$O(n)$$  
  (Two linear passes through the array)

- **Space complexity:**  
  $$O(1)$$ (excluding the output array)  
  Only constant extra variables `prefix` and `suffix` are used.

---

# Code

```javascript []
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let answer = Array(nums.length).fill(1);

  // Prefix pass
  let prefix = 1;
  for (let index = 0; index < nums.length; index++) {
    answer[index] *= prefix;
    prefix *= nums[index];
  }

  // Suffix pass
  let suffix = 1;
  for (let index = nums.length - 1; index >= 0; index--) {
    answer[index] *= suffix;
    suffix *= nums[index];
  }

  return answer;
};
```
