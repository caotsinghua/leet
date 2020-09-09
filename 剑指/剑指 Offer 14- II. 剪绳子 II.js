/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
  if (n == 2) return 1
  if (n == 3) return 2
  let x = Math.floor(n / 3)
  let r = n % 3
  let M = 1000000007
  let tp = 1
  if (r == 0) {
    for (let i = 1; i <= x; i++) {
      tp = (tp * 3) % M
    }
  } else if (r === 1) {
    for (let i = 1; i <= x - 1; i++) {
      tp = (tp * 3) % M
    }
    tp = (tp * 4) % M
  } else {
    for (let i = 1; i <= x; i++) {
      tp = (tp * 3) % M
    }
    tp = (tp * 2) % M
  }
  return tp
}
