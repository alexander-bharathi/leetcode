/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function (fruits, baskets) {
  let unplaced = 0;
  for (let i = 0; i < fruits.length; i++) {
    let isPlaced = false;
    for (let j = 0; j < baskets.length; j++) {
      if (fruits[i] <= baskets[j]) {
        baskets[j] = -1;
        isPlaced = true;
        break;
      }
    }
    if (!isPlaced) unplaced++;
  }
  return unplaced;
};