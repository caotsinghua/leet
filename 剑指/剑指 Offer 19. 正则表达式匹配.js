/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  let dp = []
  for (let i = 0; i <= s.length; i++) {
    dp[i] = []
  }
  dp[0][0] = true

  for (let i = 0; i <= s.length; i++) {
    for (let j = 0; j <= p.length; j++) {
      if (j == 0) {
        if (i === 0) {
          dp[i][j] = true
        } else {
          dp[i][j] = false
        }

        // console.log(dp[i][j], dp[0][0], i, j)
      } else {
        //   j>=1
        if (p[j - 1] === "*") {

          if (i >= 1 && (s[i - 1] === p[j - 2] || p[j - 2] === ".")) {
            // console.log("匹配多次", i)
            // 匹配一多次/0次
            dp[i][j] = dp[i][j - 2] || dp[i - 1][j]
          } else {
            //0次
            dp[i][j] = dp[i][j - 2]
            // console.log(i, dp[i][j])
          }
        } else {
          if (i > 0) {
            // console.log(s[i - 1], p[j - 1], dp[i - 1][j - 1], i, j, dp[0][0])
            dp[i][j] =
              (s[i - 1] === p[j - 1] || p[j - 1] === ".") && dp[i - 1][j - 1]
          }
        }
      }
      //   console.log(i, j, dp[0][0])
    }
  }
  return !!dp[s.length][p.length]
}

console.log(isMatch("aasdfasdfasdfasdfas", "aasdf.*asdf.*asdf.*asdf.*s"))
