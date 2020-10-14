/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    const dp = new Array(prices.length + 1).fill([])
    dp[0][0] = 0
    dp[0][1] = -Infinity
    for (let i = 1; i <= prices.length; i++) {
      dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i-1])
      dp[i][1] = Math.max(dp[i-1][0] - prices[i-1], dp[i - 1][1]) // 只能买一次，因此买成本最低的
    }
  // console.log(dp)
    return dp[prices.length][0]
  }
  
  