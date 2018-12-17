/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let max = 0;
  let i = 0,
    j = height.length - 1;
  while (j - i >= 1) {
    const v = (j - i) * Math.min(height[i], height[j]);
    if (v > max) {
      // 记录最大值
      max = v;
    }
    // 移动比较小的边
    if (height[i] <= height[j]) i++;
    else j--;
  }

  return max;
};
