/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let dp = []
  for (let i = 0; i < nums.length; i++) {
    dp[i] = 1
  }
  let res = dp[0] || 0
  for (let i = 1; i < nums.length; i++) {
    // dp[i] = ?
    // find from i to 0,until finded the first lower item
    for (let j = i - 1; j >= 0; j--) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
    // got max dp[i]
    res = Math.max(res,dp[i])
  }
  return res

}
