/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  const dp = []
  for (let i = 0; i < s.length; i++) {
    dp[i] = 0
  }
  let maxlen = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ")" && s[i - 1] === "(") {
      dp[i] = (dp[i - 2] || 0) + 2
    } else if (s[i] === ")" && s[i - 1] === ")") {
      //
      const dpi_1 = dp[i - 1] || 0
      if (s[i - 1 - dpi_1] === "(") {
        dp[i] = dpi_1 + (dp[i - dpi_1 - 2] || 0) + 2
      }
    }
    maxlen = Math.max(maxlen, dp[i])
  }
//   console.log(dp)

  return maxlen
}
