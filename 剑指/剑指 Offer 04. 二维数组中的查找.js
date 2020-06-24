/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
  if (!matrix || !matrix.length || !matrix[0].length) return false
  let rowNum = matrix.length
  let colNum = matrix[0].length
  let row = 0
  let col = colNum - 1
  while (row < rowNum && col >= 0) {
    if (matrix[row][col] === target) {
      return true
    }
    if (matrix[row][col] > target) {
      col--
    } else {
      row++
    }
  }
  return false
}
