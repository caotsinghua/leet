/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  ;[m, n] = [n, m]
  let dp = []
  for (let i = 0; i < m; i++) {
    dp[i] = []
  }
//   dp[0][0] = 1
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i == 0 && j === 0) {
        dp[i][j] = 1
        continue
      }
      let left = j - 1 >= 0 ? dp[i][j - 1] : 0
      let top = i - 1 >= 0 ? dp[i - 1][j] : 0
      dp[i][j] = left + top
    }
  }

  return dp[m - 1][n - 1]
}
