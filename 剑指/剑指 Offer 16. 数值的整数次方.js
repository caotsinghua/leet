/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  let base = x
  if (n < 0) {
    base = 1/x
    n = -n
  }
//   let cache = {}
  function pow(base, p) {
    if (p === 0) return 1
    if (p % 2 === 1) {
      return base * pow(base, p - 1)
    } else {
      let tmp = pow(base, p / 2)
      return tmp * tmp
    }
  }
  return pow(base, n)
}
