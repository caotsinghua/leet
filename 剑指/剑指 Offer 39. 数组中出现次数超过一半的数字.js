/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // 摩尔投票
  let num = null
  let rate = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== num) {
      if (rate === 0) {
        rate = 1
        num = nums[i]
      } else {
        rate--
      }
    } else {
      rate++
    }
  }
  return num
}
