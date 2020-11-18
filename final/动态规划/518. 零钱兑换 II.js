/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  let dp = []
  for (let i = 0; i <= coins.length; i++) {
    dp[i] = []
    dp[i][0] = 1 // 凑和为0
  }
  for (let i = 1; i <= amount; i++) {
    dp[0][i] = 0 // 没有硬币
  }

  for (let i = 1; i <= coins.length; i++) {
    for (let j = 1; j <= amount; j++) {
      if (j >= coins[i-1]) {
        dp[i][j] =
          (dp[i][j - coins[i - 1]] || 0) /**add 可以重复用*/ +
          (dp[i - 1][j] || 0)
      } else {
        dp[i][j] = dp[i - 1][j] || 0
      }
    }
  }
  //   console.log(dp)
  return dp[coins.length][amount]
}
