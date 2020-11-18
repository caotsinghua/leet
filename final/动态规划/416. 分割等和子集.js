/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  let dp = []
  // dp[i][sum] = yes/no
  let sum = nums.reduce((a, b) => a + b, 0)
  if (sum % 2 === 1) return false
  sum /= 2
  //   for (let i = 0; i <= nums.length; i++) {
  //     dp[i] = []
  //     dp[i][0] = true // 全部消耗掉
  //   }
  //   // base case
  //   for (let i = 1; i <= sum; i++) {
  //     dp[0][i] = false // 没有数字
  //   }

  dp[0] = true

  for (let i = 1; i <= nums.length; i++) {
    for (let r = sum; r >=1; r--) { // 从后往前，
      // 放 or 不放
      // dp[i][r] =
      //   if (r >= nums[i] && dp[i - 1][r - nums[i]]) {
      //     // 放的前提是前一个可以 & 加上自己正好
      //     dp[i][r] = true
      //   } else {
      //     // 上述条件不满足，不放
      //     dp[i][r] = dp[i - 1][r]
      //   }
      if (r >= nums[i]) {
        // 放的前提是前一个可以 & 加上自己正好
        dp[r] =  dp[r - nums[i]] || dp[r] || false // 放不放都可，前一个未必true
      } else {
        // 上述条件不满足，不放
        dp[r] = dp[r] || false
      }
    }
  }
  return dp[sum]
}
