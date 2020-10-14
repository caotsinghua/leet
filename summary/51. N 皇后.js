/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  let cols = [] // 同一列，j相同
  let rows = [] // 同一行，i相同
  let left = [] // 左上到右下，j-i 相同，为某个定值
  let right = [] // 右上到坐下，i+j仙童
  let s = []
  for (let k = 0; k < n; k++) {
    s.push(".")
  }

  const result = []
  function backtrack(i, temp) {
    if (i === n) {
      result.push(temp)
      return
    }

    // 检查
    for (let j = 0; j < n; j++) {
      if (!cols[j] && !rows[i] && !left[j - i] && !right[i + j]) {
        // 满足条件
        s[j] = "Q"
        let ss = s.join("")
        s[j] = "."
        cols[j] = true
        rows[i] = true
        left[j - i] = true
        right[i + j] = true
        backtrack(i + 1, [...temp, ss])
        cols[j] = false
        rows[i] = false
        left[j - i] = false
        right[i + j] = false
      }
    }
  }
  backtrack(0, [])
  return result
}
