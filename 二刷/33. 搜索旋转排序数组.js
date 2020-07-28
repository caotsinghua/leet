/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let l = 0,
    r = nums.length - 1
  while (l <= r) {
    let m = Math.floor((l + r) / 2)
    if (nums[m] === target) {
      return m
    }
    if (nums[m] >= nums[0]) {
      // 左边有序
      if (nums[0] <= target && nums[m] > target) {
        // 左边有序
        r = m - 1
      } else {
        l = m + 1
      }
    } else {
      // 如果you边有序nums
      if (nums[m] < target && nums[nums.length - 1] >= target) {
        l = m + 1
      } else {
        r = m - 1
      }
    }
  }
  if (nums[l] === target) {
    return l
  }
  return -1
}
