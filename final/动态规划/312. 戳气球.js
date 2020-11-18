/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
  nums = [1, ...nums, 1] // 添加虚拟节点
  let dp = []
  nums.forEach((_, i) => {
    dp[i] = []
    dp[i][i] = 0
  })
  for (let left = nums.length-3; left >=0; left--) {
    for (let right = left + 2; right < nums.length; right++) {
      //    最后戳破的位置
      for (let k = left + 1; k <= right - 1; k++) {
        dp[left][right] = Math.max(
          (dp[left][right]||0),
          nums[k] * nums[left] * nums[right] + (dp[left][k]||0) + (dp[k][right] || 0)
        )
        // console.log(dp[left][right],nums[k],nums[k-1],nums[k+1],k)
      }
    }
  }
//   console.log(dp)
  return dp[0][nums.length-1] || 0
}
