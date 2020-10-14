/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let dp=[] // i 天 ，k次操作，是否持有0 无，1 有
    let K=2;
    for(let i=0;i<=prices.length;i++){
       dp[i]=[]
        for(let k=0;k<=K;k++){
            dp[i].push([])
        }
    }
  // 三维数组
  for(let i=0;i<=K;i++){
      dp[0][i][0] = 0
      dp[0][i][1] = -Infinity
  }
  for (let i = 1; i <= prices.length; i++) {
    dp[i][0][0] = 0 // 前一天没卖过，手上也没有
    dp[i][0][1] = -Infinity // 前一天，没买过，但手上有
    for (let k = 1; k <= 2; k++) {
      dp[i][k][0] = Math.max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i-1])
      dp[i][k][1] = Math.max(dp[i - 1][k][1], dp[i - 1][k - 1][0] - prices[i-1])
     
    }
  }
  return dp[prices.length][2][0]
}
