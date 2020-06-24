/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let first = 0,
    second = 0
  nums.sort((a, b) => a - b)
  let minDiff = Infinity
  let res = 0
  for (first = 0; first < nums.length; first++) {
    if (first > 0 && nums[first] === nums[first - 1]) {
      continue
    }
    second = first + 1
    let third = nums.length - 1
    let curTarget = target - nums[first]
    while (second < third) {
      if (
        Math.abs(nums[first] + nums[second] + nums[third] - target) < minDiff
      ) {
        minDiff = Math.abs(nums[first] + nums[second] + nums[third] - target)
        res = nums[first] + nums[second] + nums[third]
      }
      if (nums[second] + nums[third] > curTarget) {
        third--
      } else if (nums[second] + nums[third] < curTarget) {
        second++
      } else {
        return nums[first] + nums[second] + nums[third]
      }
    }
  }
  return res
}
