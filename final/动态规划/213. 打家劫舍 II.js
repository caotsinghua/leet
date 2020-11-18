/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  // 不选择尾巴，或者不选择头分别计算，返回较大的一个
  // 一共就三种可能，都不选，选头，选尾巴
  if (nums.length === 0) return 0
  if (nums.length === 1) return nums[0]
  return Math.max(findOne(nums.slice(0, -1)), findOne(nums.slice(1)))
}
function findOne(nums) {
  let dp = []

  for (let i = 0; i <= nums.length; i++) {
    dp[i] = [0, 0]
  }

  for (let i = 1; i <= nums.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1])
    dp[i][1] = dp[i - 1][0] + nums[i - 1]
  }
//   console.log(Math.max(dp[nums.length][0], dp[nums.length][1]))
  return Math.max(dp[nums.length][0], dp[nums.length][1])
}
