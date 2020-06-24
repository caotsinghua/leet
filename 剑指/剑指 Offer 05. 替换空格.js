/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  let res = ""
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      res += "%20"
    } else {
      res += s[i]
    }
  }
  return res
}
