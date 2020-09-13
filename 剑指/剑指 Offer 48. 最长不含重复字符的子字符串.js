/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let map = {}
  let res = 0
  let i = 0,
    j = 0
  while (j < s.length) {
    if (map[s[j]] != undefined) {
      i = Math.max(map[s[j]] + 1, i)
    //   console.log(i, s[j])
    }
    // console.log(s.substring(i,j+1),map[s[j]],i)
    map[s[j]] = j

    res = Math.max(res, j - i + 1)
    j++
  }
  return res
}
