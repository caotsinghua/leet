/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  let left = 0
  let right = nums.length - 1
  let len = nums.length - 1
  while (left <= right) {
    let m = Math.floor((left + right) / 2)
    // console.log(nums[m])
    if (nums[m] === target) {
      return true
    }
    if (nums[m] === nums[left]) {
      left++
      continue
    }

    if (nums[m] > nums[left]) {
      // 左边有序
      if (nums[left] <= target && nums[m] > target) {
        right = m - 1
      } else {
        left = m + 1
      }
    } else {
      // 右边有序
      if (nums[m] < target && nums[right] >= target) {
        left = m + 1
      } else {
        right = m - 1
      }
    }
  }

  return false
}
