/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b)
  let result = []
  let a = 0,
    b = 0,
    c = 0
  for (a = 0; a < nums.length; a++) {
    if (a > 0 && nums[a] === nums[a - 1]) {
      //   跳过重复值
      continue
    }
    c = nums.length - 1
    for (b = a + 1; b < nums.length; b++) {
      if (b > a + 1 && nums[b] === nums[b - 1]) continue
      let tmp = nums[a] + nums[b]
      while (tmp + nums[c] > 0 && b < c) {
        c--
      }
      if (b!==c && tmp + nums[c] === 0) {
        result.push([nums[a], nums[b], nums[c]])
      }
      if (b >= c) break
    }
  }
  return result
}
