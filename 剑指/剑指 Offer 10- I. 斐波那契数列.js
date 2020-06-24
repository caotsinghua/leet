/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n === 0) return 0
  if (n === 1) return 1
  let a = 0
  let b = 1

  // 0 1 1 2
  for (let i = 1; i < n; i++) {
    let t = a
    a = b% 1000000007
    b = (t + b)% 1000000007
    
  }
 
  return b 
}
