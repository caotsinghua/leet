/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let a = 0,
    b = 0,
    c = 0
  nums.sort((a, b) => a - b)
  let res = []
  for (a = 0; a < nums.length; a++) {
    if (a > 0 && nums[a] === nums[a - 1]) {
      continue
    }
    c = nums.length - 1
    for (b = a + 1; b < nums.length; b++) {
      if (b > a + 1 && nums[b] === nums[b - 1]) {
        continue
      }
      while (nums[a] + nums[b] + nums[c] > 0 && c > b) {
        c--
      }
      if (c === b) {
        break
      }
      if (nums[a] + nums[b] + nums[c] === 0) {
        res.push([nums[a], nums[b], nums[c]])
      }
    }
  }
  return res
}
