/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (x == 0) return 0
  if (n === 0) return 1
  const map = {}
  if (n < 0) {
    n = -n
    x = 1 / x
  }
  function loop(num) {
    if (num === 0) return 1
    if (num === 1) return x
    const mid = Math.floor(num / 2)
    if (map[mid]) return map[mid]
    const half = loop(mid)
    if (num % 2 === 0) {
      // 偶数
      map[num] = half * half
    } else {
      map[num] = x * half * half
    }
    return map[num]
  }

  return loop(n, x)
}
