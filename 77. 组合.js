/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  if (k === 0) return []
  let res = []

  for (let i = 1; i <= n - k + 1; i++) {
    dfs([i], i, 1)
  }
  function dfs(tmp, start, deep) {
    if (deep == k) {
    
      res.push(tmp)
      return
    }
    for (let s = start + 1; s <= n; s++) {
      dfs([...tmp, s], s, deep + 1)
    }
  }
  return res
}
