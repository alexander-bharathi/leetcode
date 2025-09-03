/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
    const n = code.length;
    const result = new Array(n).fill(0);
    if (k === 0) return result;
    const steps = Math.abs(k);
    let sum = 0;
    if (k > 0) {
        for (let i = 1; i <= k; i++) {
            sum += code[i % n];
        }
        result[0] = sum;
        for (let i = 1; i < n; i++) {
            sum -= code[i % n];
            sum += code[(i + k) % n];
            result[i] = sum;
        }
    } else {
        for (let i = 1; i <= steps; i++) {
            sum += code[(n - i) % n];
        }
        result[0] = sum;
        for (let i = 1; i < n; i++) {
            sum -= code[(i - 1 - steps + n) % n];
            sum += code[(i - 1 + n) % n];
            result[i] = sum;
        }
    }
    return result;
};


// Input: code = [5,7,1,4], k = 3
// Output: [12,10,16,13]
// Explanation: Each number is replaced by the sum of the next 3 numbers. The decrypted code is [7+1+4, 1+4+5, 4+5+7, 5+7+1]. Notice that the numbers wrap around.

// Input: code = [1,2,3,4], k = 0
// Output: [0,0,0,0]
// Explanation: When k is zero, the numbers are replaced by 0. 

// Input: code = [2,4,9,3], k = -2
// Output: [12,5,6,13]
// Explanation: The decrypted code is [3+9, 2+3, 4+2, 9+4]. Notice that the numbers wrap around again. If k is negative, the sum is of the previous numbers.