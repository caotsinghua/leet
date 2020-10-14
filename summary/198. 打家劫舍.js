/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let dp = []
  for (let i = 0; i < nums.length + 1; i++) {
    dp[i] = []
  }
  dp[0][0] = 0
  dp[0][1] = 0
  for (let i = 1; i <= nums.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][1], dp[i - 1][0])
    dp[i][1] = Math.max(
      dp[i - 1][0] + nums[i-1],
      i > 1 ? dp[i - 2][1] + nums[i-1] : 0
    )
  }
//   console.log(dp)
  return Math.max(dp[nums.length][0], dp[nums.length][1])
}
