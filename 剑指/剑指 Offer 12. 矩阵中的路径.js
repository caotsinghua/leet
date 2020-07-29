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

  const ROWS = board.length
  const COLS = board[0].length
  function getVisited() {
    const visited = []
    let c = 0
    while (c < ROWS) {
      visited[c++] = []
    }
    return visited
  }
  const visited = getVisited()
  const edges = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]
  // dfs
  //   function dfs(i, j) {
  //     let stack = [[i, j, board[i][j]]]
  //     while (stack.length) {
  //       let [curi, curj, curs] = stack.pop()
  //       console.log(curs)
  //       if (curs === word) return true
  //       //   visited[]
  //       for (let ti = 0; ti < edges.length; ti++) {
  //         let _nexti = curi + edges[ti][0]
  //         let _nextj = curj + edges[ti][1]
  //         if (
  //           _nexti >= 0 &&
  //           _nexti < ROWS &&
  //           _nextj >= 0 &&
  //           _nextj < COLS &&
  //           !visited[_nexti][_nextj] &&
  //           curs.length < word.length
  //         ) {
  //           visited[_nexti][_nextj] = true
  //           stack.push([_nexti, _nextj, curs + board[_nexti][_nextj]], visited)
  //         }
  //       }
  //     }
  //     return false
  //   }

  function dfs(curi, curj, k) {
    if (
      !(
        curi >= 0 &&
        curi < ROWS &&
        curj >= 0 &&
        curj < COLS &&
        board[curi][curj] === word[k]
      )
    ) {
      return false
    }
    if (k === word.length - 1) return true
    let boo = false
    let t = board[curi][curj]
    board[curi][curj] = "/"
    for (let ti = 0; ti < edges.length; ti++) {
      let _nexti = curi + edges[ti][0]
      let _nextj = curj + edges[ti][1]
      boo = boo || dfs(_nexti, _nextj, k + 1)
    }
    board[curi][curj] = t
    return boo
  }

  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      const ok = dfs(i, j, 0)
      if (ok) {
        return true
      }
    }
  }
  return false
}

console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCEDA"
  )
)
