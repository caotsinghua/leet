/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let max = 0;
  const len = height.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      const width = j - i;
      const h = Math.min(height[j], height[i]);
      if (width * h > max) {
        max = width * h;
      }
    }
  }
  return max;
};
