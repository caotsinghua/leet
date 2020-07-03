/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  let row = 0,
    col = 0
  const N = matrix.length
  for (let i = 0; i < k - 1; i++) {
    const cur = matrix[row][col]
    // 找下一个位置
    let right = Infinity
    let bottom = Infinity
    let bottolCol
    if (col + 1 < N) {
      right = matrix[row][col + 1]
    }
    // 从下一行找第一个比当前元素大的
    if (row + 1 < N) {
      bottolCol = find(matrix[row + 1], cur)
      bottom = matrix[row + 1][bottolCol]
    }
    console.log(bottom, right)
    if (bottom < right) {
      row = row + 1
      col = bottolCol
    } else {
      if (col + 1 < N) {
        col = col + 1
      }
    }
    console.log(matrix[row][col])
  }
  return matrix[row][col]
}

function find(arr, target) {
  let i = 0,
    j = arr.length - 1
  while (i < j) {
    let mid = Math.floor((i + j) / 2)
    if (arr[mid] < target) {
      i = mid + 1
    } else {
      j = mid
    }
  }
  return i
}

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  const n = matrix.length
  let min = matrix[0][0]
  let max = matrix[n - 1][n - 1]
  while (min < max) {
    let mid = Math.floor((min + max) / 2)
    // console.log(min, max, find(matrix, mid))
    if (find(matrix, mid) >= k) {
      // 在这个区域
      max = mid
    } else {
      min = mid + 1
    }
  }
  return min
}

function find(matrix, target) {
  let count = 0
  let i = matrix.length - 1
  let j = 0
  for (j = 0; j < matrix.length; j++) {
    i = matrix.length - 1
    // console.log(i, j)
    while (i >= 0 && matrix[i][j] > target) {
      i--
    }
    if (i >= 0) {
      count += i + 1
    }
  }
  return count
}
