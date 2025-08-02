/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    const seen = new Set();
    function getNumber(n) {
        let sum = 0;
        while (n > 0) {
            let digits = n % 10;
            sum += digits * digits;
            n = Math.floor(n / 10);
        }
        return sum;
    }

    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = getNumber(n);
    }
    return n === 1;
};