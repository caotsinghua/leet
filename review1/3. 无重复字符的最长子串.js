/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let i = 0,
    j = 0
  let res = 0
  let map = {}
  while (j < s.length) {
    if (!map[s[j]]) {
      map[s[j]] = 1
      res = Math.max(res, j - i + 1)
    } else {
      //   有重复的
      map[s[j]]++
      while (i < j) {
        map[s[i]]--
        i++
        if (map[s[j]] <= 1) {
          break
        }
      }
    }
    j++
  }
  return res
}
