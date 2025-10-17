/**
 * @param {number} numRows
 * @return {number[][]}
 */

var generate = function (numRows) {
  if (numRows === 0) return [];
  let result = [[1]];
  for (let i = 1; i < numRows; i++) {
    const rows = [];
    const previousRow = result[i - 1];
    for (let j = 0; j <= previousRow.length; j++) {
      if (j == 0 || j == previousRow.length) rows.push(1);
      else rows.push(previousRow[j] + previousRow[j - 1]);
    }
    result.push(rows);
  }
  return result;
};
