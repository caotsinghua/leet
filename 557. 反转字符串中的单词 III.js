/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let res = ""
  let tmp = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
     
      if (tmp.length) {
        tmp.reverse()
        res += tmp.join("")
        tmp = []
        res += " "
      }
    } else if (s[i] !== " ") {
      tmp.push(s[i])
    }
  }
  if (tmp.length) {
    tmp.reverse()
    res += tmp.join("")
  }
  return res
}
