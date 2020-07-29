/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function (nums, m) {
  let dp = []
  for (let i = 0; i <= nums.length; i++) {
    dp[i] = []
  }
  const sub = [] // 用于计算子数组和
  let s = 0
  for (let i = 0; i < nums.length; i++) {
    s += nums[i]
    sub[i + 1] = s
  }
  sub[0]=0
  //
  dp[0][0]=0
  for (let i = 1; i <= nums.length; i++) {
    for (let j = 1; j <= Math.min(i, m); j++) {
      // 计算dp[i][j]:前i个数，分成j段的和的最小值
      for (let k = 0; k < i; k++) {
        let tp = dp[k][j - 1] === undefined ? Infinity : dp[k][j - 1]
        let maxt = Math.max(tp, sub[i] - sub[k])
        dp[i][j] = Math.min(dp[i][j] == undefined ? Infinity : dp[i][j], maxt)
        // console.log(k, j-1,dp[k][j-1], maxt)
        // console.log("dp", i, j, dp[i][j])
      }
    }
  }
  return dp[nums.length][m]
}
