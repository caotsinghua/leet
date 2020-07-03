/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function (A, B) {
  const dp = []
  for (let i = 0; i < A.length; i++) {
    dp[i] = []
  }
  let res = 0
  for (let i = A.length - 1; i >= 0; i--) {
    for (let j = B.length - 1; j >= 0; j--) {
      let dpNext
      if (i >= A.length - 1 || j >= B.length - 1) {
        dpNext = 0
      } else {
        dpNext = dp[i + 1][j + 1]
      }
      if (A[i] !== B[j]) {
        dp[i][j] = 0
      } else {
        dp[i][j] = dpNext + 1
      }
      //   console.log(i,j,dp[i][j])
      res = Math.max(res, dp[i][j])
    }
  }
  return res
}

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function (A, B) {
  let aLen = A.length
  let bLen = B.length
  let max = 0
  for (let i = 0; i < aLen; i++) {
    let times = Math.min(bLen, aLen - i) // 移动次数
    let tlen = maxLen(A, B, i, 0, times)
    max = Math.max(tlen, max)
  }
  //    对B从0开始滑动
  for (let i = 0; i < bLen; i++) {
    let times = Math.min(aLen, bLen - i)
    let tlen = maxLen(A, B, 0, i, times)
    max = Math.max(tlen, max)
  }
  return max
}

function maxLen(A, B, diffA, diffB, times) {
  let res = 0
  let k = 0
  for (let i = 0; i < times; i++) {
    if (A[i + diffA] === B[i + diffB]) {
      k++
    } else {
     
      k = 0
    }
    res = Math.max(res, k)
  }
  return res
}
