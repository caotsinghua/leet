/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function (A, B) {
  let i = 0,
    j = 0
  let result = []
  if (A.length === 0 || B.length === 0) return []
  while (i < A.length && j < B.length) {
    let [a1, a2] = [A[i][0], A[i][1]]
    let [b1, b2] = [B[j][0], B[j][1]]
    // check
    if (!(a2 < b1 || a1 > b2)) {
      // 有交集
      result.push([Math.max(a1, b1), Math.min(a2, b2)])
    } else {
      // 没有交集
    }
    if (b2 <= a2) {
      j++
    } else {
      i++
    }
  }
  return result
}
