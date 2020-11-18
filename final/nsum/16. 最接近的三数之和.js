/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b)
  let result = []
  let a = 0,
    b = 0,
    c = 0
  let diff = Infinity
  for (a = 0; a < nums.length; a++) {
    c = nums.length - 1
    b = a + 1
    while (b < c) {
      let s = nums[a] + nums[b] + nums[c]
      let v = Math.abs(s - target)
      if (v < diff) {
        diff = v
        result = s
      }
      if (s > target) {
        c--
      } else if (s < target) {
        b++
      } else {
        result = target
        return result
      }
    }
  }
  return result
}
