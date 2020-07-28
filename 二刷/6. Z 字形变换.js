/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if(numRows==1) return s
  let result = ""
  let dir = 1
  let arr = []
  let rows = Math.min(numRows, s.length)
  for (let i = 0; i < rows; i++) {
    arr[i] = []
  }
  let row = 0
  let col = 0
  let c = 0
  while (c < s.length) {
    arr[row][col] = s[c++]
    if (dir === 1) {
      // 向下
      row++
      if (row === rows) {
        // 方向改变
        dir = -1
        row-=2
        col++
      }
    } else if (dir === -1) {
      row--
      col++
      if (row === -1) {
        col--
        row+=2
        dir = 1
      }
    }
  }
//   console.log(arr)
  for(let i=0;i<rows;i++){
      for(let j=0;j<arr[i].length;j++){
          if(arr[i][j]){
            result+=arr[i][j]
          }
      }
  }
  return result
}
