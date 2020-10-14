/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let i = nums.length - 1
  while (i > 0) {
    if (nums[i] > nums[i - 1]) {
      break
    }
    i--
  }

  if (i === 0) {
    return nums.reverse()
  }
  let j = nums.length - 1
  while (j > i) {
    //   找第一个比i-1位置大的
    if (nums[j] > nums[i - 1]) {
      break
    }
    j--
  }
  let p = nums[i - 1]
  nums[i - 1] = nums[j]
  nums[j] = p

  let k = nums.length - 1
  while (k > i) {
    ;[nums[i], nums[k]] = [nums[k], nums[i]]
    i++
    k--
  }
}
