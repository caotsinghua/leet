/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  function getId(row, col) {
    return Math.floor(row / 3) * 3 + Math.floor(col / 3)
  }
  let rows = []
  let cols = []
  let boxs = []
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let id = getId(i, j)
      if (!rows[i]) {
        rows[i] = {}
      }
      if (!cols[j]) {
        cols[j] = {}
      }
      if (!boxs[id]) {
        boxs[id] = {}
      }
      let num = board[i][j]
      if(num === '.'){
          continue
      }
      if (rows[i][num]) {
        return false
      } else {
        rows[i][num] = 1
      }
      if (cols[j][num]) {
        return false
      } else {
        cols[j][num] = 1
      }
      if (boxs[id][num]) {
        return false
      } else {
        boxs[id][num] = 1
      }
    }
  }
  return true
}
