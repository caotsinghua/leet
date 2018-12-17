/**
 * @description 暴力，超时 复杂度O(n^3)
 * @param {string} s
 * @return {number}
 *
 */
var lengthOfLongestSubstring = function(s) {
  // abcabcbb
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    for (let len = s.length - i; len > 0; len--) {
      const substr = s.substring(i, i + len);
      if (isUnique(substr) && len >= max) {
        max = len;
      }
    }
  }
  return max;
};
function isUnique(s) {
  for (let i = 0; i < s.length; i++) {
    if (s.substring(i + 1).indexOf(s[i]) > -1) return false;
  }
  return true;
}
// lengthOfLongestSubstring("abcabcbb");

// 滑动
var lengthOfLongestSubstring2 = function(s) {
  let max = 0,
    i = 0,
    j = 0;
  let set = new Set();
  while (i < s.length && j < s.length) {
    if (!set.has(s[j])) {
      set.add(s[j++]);
      max = Math.max(max, j - i);
    } else {
      set.delete(s[i++]);
    }
  }
  console.log(max);
  return max;
};
lengthOfLongestSubstring2("abcabcab");
