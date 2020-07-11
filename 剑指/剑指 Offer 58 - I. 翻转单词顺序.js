/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  s = s.replace(/(^\s+)|(\s+$)/, "")
  // 遇到空格就输出
  let result = []
  let tmp = []
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i]!==' ') {
      tmp.push(s[i])
    } else {
      let size = tmp.length
      if (size) {
        let t = ""
        while (size) {
          t += tmp.pop()
          size--
        }
        result.push(t)
      }
    }
  }
  let size = tmp.length
  if (size) {
    let t = ""
    while (size) {
      t += tmp.pop()
      size--
    }
    result.push(t)
  }

  return result.join(' ')
}
