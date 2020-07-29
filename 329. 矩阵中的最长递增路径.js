/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]
  if (!matrix || !matrix.length || !matrix[0].length) {
    return 0
  }
  const N = matrix.length
  let M = matrix[0].length
  let memo = []
  for (let i = 0; i < N; i++) {
    memo[i] = []
  }
  let ans = 0
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      ans = Math.max(ans, dfs(i, j))
    }
  }
  return ans

  // 从[row][col]出发得到的最长序列长度
  function dfs(row, col) {
    if (memo[row][col] !== undefined) {
      return memo[row][col]
    }
    memo[row][col] = 1
    for (let i = 0; i < dirs.length; i++) {
      let _row = row + dirs[i][0] // 某条边
      let _col = col + dirs[i][1]
      if (
        _row >= 0 &&
        _col >= 0 &&
        _row < N &&
        _col < M &&
        matrix[_row][_col] > matrix[row][col]
      )
        //   从当前起点出发的最大值 = 从某一条边的最大值 + 1
        memo[row][col] = Math.max(memo[row][col], dfs(_row, _col) + 1)
    }
    return memo[row][col]
  }
}
