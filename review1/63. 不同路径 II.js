/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  if (
    !obstacleGrid ||
    obstacleGrid.length === 0 ||
    obstacleGrid[0].length === 0
  )
    return 0
  let dp = []
  const m = obstacleGrid.length
  const n = obstacleGrid[0].length
  for (let i = 0; i < m; i++) {
    dp[i] = []
  }
  dp[0][0] = obstacleGrid[0][0] === 1 ? 0 : 1
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i == 0 && j === 0) {
        continue
      }
      if (obstacleGrid[i][j] === 1) {
        dp[i][j] = 0
        continue
      }
      let left = j - 1 >= 0 && obstacleGrid[i][j - 1] !== 1 ? dp[i][j - 1] : 0
      let top = i - 1 >= 0 && obstacleGrid[i - 1][j] !== 1 ? dp[i - 1][j] : 0
      dp[i][j] = left + top
    }
  }
  return dp[m - 1][n - 1]
}
