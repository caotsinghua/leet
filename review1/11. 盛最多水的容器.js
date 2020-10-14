/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let res = 0
  let l = 0
  let r = height.length - 1
  while (l < r) {
    let minH = Math.min(height[l], height[r])
    let t = (r - l) * minH
    res = Math.max(res, t)
    if (height[l] < height[r]) {
      l++
    } else {
      r--
    }
  }
  return res
}
