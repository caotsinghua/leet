/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
  nums.sort((a, b) => a - b)
  let pre = nums[0]
  let c0 = 0
  let diff = 0
  if (pre === 0) {
    c0++
  }
  //   console.log(nums)
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] == 0) {
      //   大王
      c0++
      continue
    }
    if (nums[i] - pre === 0) {
      return false
    }
    // console.log(nums[i], pre, diff)
    if (pre !== 0 && nums[i] - pre > 1) {
      diff += nums[i] - pre - 1
    }
    pre = nums[i]
  }
  //   console.log(c0, diff)
  return c0 >= diff
}

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
  let newNums = nums.filter((n) => n !== 0)
  const set = new Set(newNums)
  if (set.size !== newNums.length) {
    return false
  }
  //   const max = Math.max(...newNums)
  //   const min = Math.min(...newNums)
  let max = newNums[0] || 0
  let min = newNums[0] || 0
  newNums.forEach((n) => {
    max = n > max ? n : max
    min = n < min ? n : min
  })
  return max - min < 5
}
