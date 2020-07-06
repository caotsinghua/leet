/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  if (obstacleGrid.length == 0) return 0
  let n = obstacleGrid[0].length
  const dp = []
  for (let i = obstacleGrid.length - 1; i >= 0; i--) {
    dp[i] = []
    for (let j = n - 1; j >= 0; j--) {
      dp[i][j] = 0
    }
  }
  dp[obstacleGrid.length - 1][n - 1] =
    obstacleGrid[obstacleGrid.length - 1][n - 1] === 1 ? 0 : 1
  for (let i = obstacleGrid.length - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (i === obstacleGrid.length - 1 && j === n - 1) {
        continue
      }
      // 从下方/右方
      if (obstacleGrid[i][j] === 1) {
        dp[i][j] = 0
      } else {
        let r = 0
        let bottom = 0
        if (j + 1 < n) {
          r = obstacleGrid[i][j + 1] === 1 ? 0 : dp[i][j + 1]
        }
        if (i + 1 < obstacleGrid.length) {
          bottom = obstacleGrid[i + 1][j] === 1 ? 0 : dp[i + 1][j]
        }
        dp[i][j] = r + bottom
      }
    }
  }
  console.log(dp)
  return dp[0][0]
}
