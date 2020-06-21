/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  //
  let dp = []
  for (let i = 0; i <= s.length; i++) {
    dp[i] = []
  }

  dp[0][0] = true

  function match(i, j) {
    if (i === 0) return false
    // console.log(s[i - 1], p[j - 1])
    if (p[j - 1] === ".") {
      return true
    }
    return s[i - 1] === p[j - 1]
  }

  for (let i = 0; i <= s.length; i++) {
    for (let j = 1; j <= p.length; j++) {
      if (p[j - 1] === "*") {
        //   *
        if (match(i, j - 1)) {
          // 前一个p 和现在的s匹配
          // s到i-1匹配 p到j，说明后面再来多个s最后的字符也没事
          //
          dp[i][j] = dp[i - 1][j] || dp[i][j - 2] || dp[i][j - 1]
        } else {
          dp[i][j] = dp[i][j - 2]
        }
      } else {
        if (match(i, j)) {
        //   console.log(i, j)
          //   console.log(i, j, s[i - 2], p[j - 2], s[i - 1], p[i - 1])
          dp[i][j] = dp[i - 1][j - 1]
        }
      }
    }
  }
  return !!dp[s.length][p.length]
}
