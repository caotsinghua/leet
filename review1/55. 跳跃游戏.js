/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let maxP = 0
  for (let i = 0; i < nums.length; i++) {
    if (i > maxP) return false
    maxP = Math.max(maxP, i + nums[i])
  }
  return true
}
