/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  s = s.replace(/(^\s+)|(\s+$)/, "")

  let end = s.length - 1
  let start = s.length - 1

  const res = []
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " ") {
      // 碰到第一个空格
      let tp = ""
      for (let j = i + 1; j <= startI; j++) {
        tp += s[j]
      }
      res.push(tp)
    }
    while()
  }
}
