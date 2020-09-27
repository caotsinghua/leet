/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let countMap = {}
  let left = 0,
    right = 0
  let res = 0
  while (right < s.length) {
    let c = s[right]
    right++
    if (!countMap[c]) {
      countMap[c] = 1
    } else {
      countMap[c]++
    }

    while (more() && left <= right-1) {
      let c2 = s[left]
      countMap[c2]--
      left++
    }
    let len = right- left
    res= Math.max(len,res)
  }
  function more() {
    for (let k in countMap) {
      if (countMap[k] > 1) {
        return true
      }
    }
    return false
  }

  return res
}
