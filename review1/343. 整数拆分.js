/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  // 一个数拆分成至少两个正整数
  // 则1 = 1*1
  // 2=1 * 2
  // a=1~n-1/2 b=n-a
  // 3= 1+2,
  // 4 = 1+3,2+2
  let dp = []
  dp[0] = 0
  dp[1] = 1
  dp[2] = 1
  if (n <= 2) return dp[n]
  let res = 0
  for (let i = 1; i <= n; i++) {
    //   dp[i] = max(j*dp[i-j],j*i-j)
    let pre = 1
    t = 0
    for (pre = 1; pre <= Math.floor(i / 2); pre++) {
      let next = i - pre
      t = Math.max(t, next * pre, pre * dp[next])
    }
    dp[i] = t
  }
  return dp[n]
}
