/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder) {
  function loop(i, j) {
    if (i >= j) return true
    // 左边
    let p = 0
    while (postorder[p] < postorder[j]) {
      p++
    }
    // p > j // 找到第一个比根大的，划分出左右
    let m = p
    // 右子树全部大于根
    while (p < j && postorder[p] > postorder[j] ) {
      p++
    }
    if (p < j) {
      return false
    }
    return loop(i, m - 1) && loop(m, j - 1)
  }
  return loop(0, postorder.length - 1)
}
