/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let dp = []
  for (let i = 0; i < s.length; i++) {
    dp[i] = []
  }

  let maxLen = 0
  let res = ""

  for (let len = 0; len < s.length; len++) {
    for (let i = 0; i < s.length - len; i++) {
      if (len === 0) {
        dp[i][len] = true
      } else if (len === 1) {
        dp[i][len] = s[i + len] === s[i]
      } else {
        dp[i][len] = dp[i + 1][len - 2] && s[i + len] === s[i]
      }

      if (dp[i][len]) {
        //   会问
        if (len + 1 > maxLen) {
          maxLen = len + 1
          res = s.substr(i, len + 1)
        }
      }
    }
  }
  return res
}
