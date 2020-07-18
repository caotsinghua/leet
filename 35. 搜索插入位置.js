/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0
  let right = nums.length - 1
  while (left < right) {
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid
    }
  }
  if (target > nums[left]) {
    return left + 1
  } else {
    return left
  }
}
