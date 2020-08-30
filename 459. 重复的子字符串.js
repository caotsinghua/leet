/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  let len = 1
  for (len = 1; len < s.length; len++) {
    // console.log(s.length, len)
    if (s.length % len !== 0) continue
    let i = len
    for (i = len; i < s.length; i++) {
      if (s[i % len] === s[i]) {
        continue
      } else {
        break
      }
    }
    if (i === s.length) {
      return true
    }
  }
  return false
}
