/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  if (!word) return true
  if (!board || !board.length || !board[0].length) {
    return false
  }
  const edges = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]
  const m = board.length
  const n = board[0].length
  const targetLen = word.length
  function find(temps, i, j, len) {
    let finded = false

    if (len === targetLen) {
      return true
    }
    if (
      !(
        i >= 0 &&
        i < m &&
        j >= 0 &&
        j < n &&
        board[i][j] !== "/" &&
        board[i][j] === word[len]
      )
    ) {
      return false
    }
    let t = board[i][j]
    board[i][j] = "/"
    for (let k = 0; k < edges.length; k++) {
      const [a, b] = edges[k]
      let nexti = i + a
      let nextj = j + b
      finded = finded || find(temps, nexti, nextj, len + 1)
    }
    board[i][j] = t
    return finded
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let t = find("", i, j, 0)
      //   console.log(t)
      if (t) return true
    }
  }
  return false
}
