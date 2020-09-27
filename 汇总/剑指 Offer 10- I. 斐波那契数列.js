/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  let a = 0
  let b = 1
  let m = 1000000007
  //   0 1 1 2 3 5
  for (let i = 1; i <= n; i++) {
    let t = a
    a = b
    b = (t + b) % m
  }
  return a
}
