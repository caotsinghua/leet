/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function (n) {
  let low = 0
  let high = Math.floor(n / 10)
  let cur = n % 10
  let digit = 1
  let res = 0
  while (cur != 0 || high != 0) {
    if (cur === 0) {
      res += high * digit
    } else if (cur === 1) {
      res += high * digit + 1 + low
    } else {
      res += (high + 1) * digit
    }
    low += cur * digit
    cur = high % 10
    high = Math.floor(high / 10)
    digit *= 10
  }
  return res
}
