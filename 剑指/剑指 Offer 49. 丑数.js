/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  let dp1 = [1] // *2
  let dp2 = [1] //*3
  let dp3 = [1] // *5
  // 合并
  let dp = [1]
  let p1 = 0,
    p2 = 0,
    p3 = 0
  for (let i = 1; i <= n; i++) {
    let a = dp[p1] * 2 // dp1
    let b = dp[p2] * 3 // dp2
    let c = dp[p3] * 5 //dp3
    let m = Math.min(a, b, c)
 
    dp[i] = m
    if (m == a) {
      p1++
    }
    if (m == b) {
      p2++
    }
    if (m == c) {
      p3++
    }
  }
//   console.log(dp)
  return dp[n - 1]
}
