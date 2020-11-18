// 容量W的背包，N products,

function solution(W, N, prices, weights) {
  let maxValue = 0
  if (N === 0 || N === 0) return 0
  let dp = []
  for (let i = 0; i <= N; i++) {
    dp[i] = [] // w
    dp[i][0] = 0
  }
  for (let i = 0; i <= W; i++) {
    dp[0][i] = 0 // 没有物品，就是0
  }
  // base case end
  for (let index = 1; index <= N; index++) {
    for (let storage = 1; storage <= W; storage++) {
      // dp[i][s] = max(dp[i-1][s - weight[i]],dp[i-1][s])
      if (storage - weights[index] >= weights[index]) {
        dp[index][storage] = Math.max(
          /**选择index */ dp[index - 1][storage - weights[index]] +
            prices[index],
          dp[index - 1][storage]
        )
      } else {
        dp[index][storage] = dp[index - 1][storage]
      }
    }
  }
  return dp[N][W]
}
