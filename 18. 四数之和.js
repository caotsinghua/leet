/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  let a, b, c, d
  nums.sort((a, b) => a - b)
  const res = []
  for (a = 0; a < nums.length; a++) {
    if (isRepeat(a, 0, nums)) {
      continue
    }
    for (b = a + 1; b < nums.length; b++) {
      if (isRepeat(b, a + 1, nums)) {
        continue
      }
      d = nums.length - 1
      for (c = b + 1; c < nums.length; c++) {
        if (isRepeat(c, b + 1, nums)) {
          continue
        }

        while (c < d && nums[a] + nums[b] + nums[c] + nums[d] > target) {
          d--
        }
        if (c === d) {
          break
        }
        if (nums[a] + nums[b] + nums[c] + nums[d] === target) {
          res.push([nums[a], nums[b], nums[c], nums[d]])
        }
      }
    }
  }
  return res
}

function isRepeat(i, pre, nums) {
  return i > pre && nums[i] === nums[i - 1]
}
