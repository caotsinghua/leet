/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let dp = []
  const rows = grid.length
  if (rows === 0 || !grid[0]) return 0
  const cols = grid[0].length
  for (let i = 0; i < rows; i++) {
    dp[i] = []
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let up
      let left
      if (i - 1 >= 0) {
        up = dp[i - 1][j]
      }
      if (j - 1 >= 0) {
        left = dp[i][j - 1]
      }

      if (left !== undefined && up !== undefined) {
        add = Math.min(left, up)
      } else if (left !== undefined) {
        add = left
      } else if (up !== undefined) {
        add = up
      } else {
        add = 0
      }

      dp[i][j] = add + grid[i][j]
    }
  }
//   console.log(dp)
  return dp[rows - 1][cols - 1]
}
