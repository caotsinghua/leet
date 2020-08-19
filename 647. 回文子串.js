/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let dp = []
  for (let i = 0; i <= s.length; i++) {
    dp[i] = []
  }

  let res = 0

  for (let len = 1; len <= s.length; len++) {
    for (let start = 0; start < s.length - len + 1; start++) {
      if (len === 1) {
        dp[len][start] = true
      } else if (len === 2) {
        dp[len][start] = s[start] === s[start + len - 1]
      } else {
        dp[len][start] =
          s[start] === s[start + len - 1] && dp[len - 2][start + 1]
      }
      if (dp[len][start]) {
        // console.log(len, start, s.substr(start, len))
        res++
      }
    }
  }
  return res
}
