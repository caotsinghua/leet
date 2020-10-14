/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let a = 0,
    b = 0,
    c = 0
  nums.sort((a, b) => a - b)
  let res = 0
  let mindiff = Infinity
  for (a = 0; a < nums.length; a++) {
    if (a > 0 && nums[a] === nums[a - 1]) {
      continue
    }
    b = a + 1
    c = nums.length - 1
    while (b < c) {
      if (Math.abs(nums[a] + nums[b] + nums[c] - target) < mindiff) {
        mindiff = Math.abs(nums[a] + nums[b] + nums[c] - target)
        res = nums[a] + nums[b] + nums[c]
      }
      if (nums[a] + nums[b] + nums[c] > target) {
        c--
      } else if (nums[a] + nums[b] + nums[c] < target) {
        b++
      } else {
        return nums[a] + nums[b] + nums[c]
      }
    }
  }
  return res
}
