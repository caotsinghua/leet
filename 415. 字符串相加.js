/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let pre = 0
  let len1 = num1.length
  let len2 = num2.length
  let len = Math.min(len1, len2)
  let res = []

  let i = 0
  for (i = 1; i <= len; i++) {
    let n1 = num1[len1 - i] - 0
    let n2 = num2[len2 - i] - 0
    // console.log(n1, n2)
    let tmp = n1 + n2 + pre
    let cur = tmp % 10
    pre = Math.floor(tmp / 10)
    res[i] = cur
  }

  if (len === len1) {
    //   添加len2
    for (; i <= len2; i++) {
        // console.log(i)
      let tmp = num2[len2 - i]-0 + pre
      let cur = tmp % 10
      pre = Math.floor(tmp / 10)
      res[i] = cur
    }
  } else {
    for (; i <= len1; i++) {
      let tmp = num1[len1 - i]-0 + pre
      let cur = tmp % 10
      pre = Math.floor(tmp / 10)
      res[i] = cur
    }
  }
  if (pre) {
    res[i] = pre
  }
  return res.reverse().join("")
}
