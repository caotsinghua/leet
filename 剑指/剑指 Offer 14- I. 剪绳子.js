/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
  if (n <= 3) return n - 1
  let x = Math.floor(n / 3)
  let rest = n % 3
  // 尽可能以长度3等分,如果余数1,则最后一段变成4
  if (rest === 0) return Math.pow(3, x)
  if (rest === 1) return Math.pow(3, x - 1) * 4
  return Math.pow(3, x) * 2
}

// 动态规划
/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
  if (n == 2) return 1
  if (n === 3) return 2
  let dp = []
  dp[0] = 0
  dp[1] = 1
  dp[2] = 2
  dp[3] = 3

  for (let i = 4; i <= n; i++) {
    let max = 0
    for (let j = 1; j <= Math.floor(i / 2); j++) {
      let tmp = dp[j] * dp[i - j]
      max = Math.max(max, tmp)
    //   console.log(max)
    }
    dp[i] = max
  }
  return dp[n]
}
