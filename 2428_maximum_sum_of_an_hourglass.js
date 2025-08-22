/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxSum = function (grid) {
  let best = 0;
  for (let i = 1; i < grid.length - 1; i++) {
    for (let j = 1; j < grid[0].length - 1; j++) {
      const hourglassSum = grid[i][j] + grid[i - 1][j] + grid[i - 1][j - 1] +
        grid[i - 1][j + 1] + grid[i + 1][j] + grid[i + 1][j - 1] + grid[i + 1][j + 1];
      if (hourglassSum > best) {
        best = hourglassSum;
      }
    }
  }
  return best;
};

// grid = [[6,2,1,3],[4,2,1,5],[9,2,8,7],[4,1,2,9]]