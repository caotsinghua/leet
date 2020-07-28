/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  let a = 0,
    b = 0,
    c = 0,
    d = 0
  nums.sort((a, b) => a - b)
  const res = []
  for (a = 0; a < nums.length; a++) {
    if (a > 0 && nums[a] === nums[a - 1]) {
      continue
    }
    for (b = a + 1; b < nums.length; b++) {
      if (b > a + 1 && nums[b] === nums[b - 1]) {
        continue
      }
      d = nums.length - 1
      for (c = b + 1; c < nums.length; c++) {
        if (c > b + 1 && nums[c] === nums[c - 1]) {
          continue
        }
        while (c < d && nums[a] + nums[b] + nums[c] + nums[d] > target) {
          d--
        }
        if (c >= d) {
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

// console.log(fourSum([1,0,-1,0,-2,2],0))