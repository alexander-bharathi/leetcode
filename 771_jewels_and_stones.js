/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
    const jewelSet = new Set(jewels);
    let total = 0;
    for (let stone of stones) {
        if (jewelSet.has(stone)) total++;
    }
    return total;
};