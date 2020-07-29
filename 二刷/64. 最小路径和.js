/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  if (!grid || !grid.length || !grid[0].length) return 0
  let dp = []
  
  let m = grid.length
  let n = grid[0].length
  for (let i = 0; i < m; i++) {
    dp[i] = []
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = grid[i][j]
        continue
      }
      let top = i - 1 >= 0 ? dp[i - 1][j] : Infinity
      let left = j - 1 >= 0 ? dp[i][j - 1] : Infinity
      dp[i][j] = Math.min(top, left) + grid[i][j]
    }
  }
  return dp[m - 1][n - 1]
}
