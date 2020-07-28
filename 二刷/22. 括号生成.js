/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let res = []
  function gen(str, leftNum, rightNum) {
    if (str.length ===n * 2) {
      res.push(str)
      return
    }
    if (leftNum < n) {
      gen(str + "(", leftNum + 1, rightNum)
    }
    if (leftNum > rightNum) {
      gen(str + ")", leftNum, rightNum + 1)
    }
  }
  gen("", 0, 0)
  return res
}
