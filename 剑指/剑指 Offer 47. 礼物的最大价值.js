/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function (grid) {
  if (grid.length === 0 || grid[0].length === 0) return 0
  let dp = Array(grid.length).fill([])
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let r1 = i,
        c1 = j - 1
      let r2 = i - 1,
        c2 = j
      let v1 = c1 < 0 ? 0 : dp[r1][c1]
      let v2 = r2 < 0 ? 0 : dp[r2][c2]
      dp[i][j] = Math.max(v1, v2) + grid[i][j]
    }
  }
  return dp[grid.length - 1][grid[0].length - 1]
}
