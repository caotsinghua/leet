/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  if (triangle.length === 0) return 0
  let dp = []
  for (let i = 0; i < triangle.length; i++) {
    dp[i] = []
  }

  for (let i = 0; i < triangle.length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      if (i > 0) {
        let l1 = j >= i ? Infinity : dp[i - 1][j]
        let l2 = j > 0 ? dp[i - 1][j - 1] : Infinity
        dp[i][j] = Math.min(l1, l2) + triangle[i][j]
        // console.log(dp[i][j], i, j)
      } else {
        // 第一行
        dp[i][j] = triangle[i][j]
      }
    }
  }
//   console.log(dp[triangle.length - 1])
  res = Math.min(...dp[triangle.length - 1])
  return res
}
