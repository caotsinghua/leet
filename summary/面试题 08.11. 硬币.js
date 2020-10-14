/**
 * @param {number} n
 * @return {number}
 */
var waysToChange = function (n) {
  let cs = [1,5,10,25]
  let dp = []
  dp[0] = 1
  let m = 1000000007
  // dp[i] = dp[i] + dp[i - coin]

  for (let j = 0; j < 4; j++) {
    let c = cs[j]
    for (let i = c; i <= n; i++) {
      dp[i] = ((dp[i] || 0 )+ dp[i - c]) % m
    }
  }

  return dp[n]
}
