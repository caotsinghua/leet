/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
  let start = 1
  let digit = 1
  let count = start * 9 * digit
  // 从start开始，digit位数，包含的数字个数
  while (n > count) {
    n -= count
    start *= 10
    digit++
    count = 9 * start * digit
  }
  //   console.log(n)
  //   从start开始，第n个

  let p = Math.floor((n - 1) / digit)
  start = start + p
  let r = ((n % digit) - 1 + digit) % digit
  //   console.log(start, p, r)
  start = "" + start

  return start[r]
}
