/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  let dp = []
  dp[0] = 0
  // dp[i] 凑成i需要的最少个数

  for (let i = 1; i <= amount; i++) {
    let m = Infinity
    coins.forEach((c) => {
      if (i >= c) {
        m = Math.min(m, dp[i - c] + 1)
      }
    })
    dp[i] = m
  }
  return dp[amount] === Infinity ? -1 : dp[amount]
}
