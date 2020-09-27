/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  let res = []

  function deep(temp, target, num) {
    if (target === 0 && temp.length === k) {
      res.push(temp)
      return
    }
    if (num > 9) return
    // no-chose
    deep(temp, target, num + 1)
    // chose
    deep([...temp, num], target - num, num + 1)
  }
  deep([], n, 1)
  return res
}
