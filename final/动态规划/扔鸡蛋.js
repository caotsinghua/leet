/**
 * @param {number} K
 * @param {number} N
 * @return {number}
 */
var superEggDrop = function (K, N) {
  const memo = []

  function dp(k, n) {
    // 0个鸡蛋
    if (k === 0) return 0
    if (k === 1) return n
    if (n === 0) return 0
    if (n === 1) return 1
    if (memo[k] && memo[k][n]) return memo[k][n]
    let res = Infinity
    // for (let i = 1; i <= n; i++) {
    //   // 从第i层扔的策略 = max(这一次没碎，碎了) 选择一个最坏情况
    //   // 每一次从第i层扔的次数的最优情况
    //   res = Math.min(res, Math.max(dp(k, n - i), dp(k - 1, i - 1))+1)
    // }
    // --- 进行二分优化
    // 找y = dp(k,n-i) down 和 y2 = dp(k-1,i-1) up 的交点
    // 一个单调递减，一个单调递增
    let l = 1
    let r = n
    while (l < r) {
      let m = Math.floor((l + r +1) / 2)
      let broke = dp(k - 1, m - 1)
      let notb = dp(k, n - m)
      if (broke > notb) {
        r = m - 1
        res = Math.min(res,broke + 1)
      } else {
        l = m
        res = Math.min(res,notb + 1)
      }
    }
    if (!memo[k]) {
      memo[k] = []
    }
    memo[k][n] = res
    return res
  }
  //   console.log(memo)
  return dp(K, N)
}
