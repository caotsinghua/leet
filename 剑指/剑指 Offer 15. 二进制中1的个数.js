/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let judge = 1
  let res = 0
  while (n) {
    res++
    n = n & (n - 1)
  }
  return res
}
