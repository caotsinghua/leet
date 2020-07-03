/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let j = nums.length - 1
  for (; j > 0; j--) {
    if (nums[j] > nums[j - 1]) {
      break
    }
  }
  if (j === 0) {
    nums.reverse()
    return nums
  }
  // 找到第一个比j-1大的数
  let p = j - 1
  let k = j + 1
  for (k = nums.length - 1; k >= j; k--) {
    if (nums[k] > nums[p]) {
      break
    }
  }
  // 321
  // 交换
  let tmp = nums[p]
  nums[p] = nums[k]
  nums[k] = tmp
  //   console.log(p, k, j, Math.floor((nums.length - j) / 2))
  // reverse
  for (let i = 0; i < Math.floor((nums.length - j) / 2); i++) {
    let tp = nums[i + j]
    nums[i + j] = nums[nums.length - i - 1]
    nums[nums.length - 1 - i] = tp
  }
  return nums
}
