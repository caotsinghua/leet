/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function (a) {
  let pre = []
  let next = []
  let p = 1
  for (let i = 0; i < a.length; i++) {
    pre[i] = p
    p = p * a[i]
  }
  p = 1
  for (let i = a.length - 1; i >= 0; i--) {
    next[i] = p
    p *= a[i]
  }

  let result = []
  for (let i = 0; i < a.length; i++) {
    result[i] = pre[i] * next[i]
  }
  return result
}
