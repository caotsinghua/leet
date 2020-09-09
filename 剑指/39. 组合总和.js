/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let res = []
  let map = {}
  function dfs(curValue, curArr, curIndex) {
    if (curIndex >= candidates.length) {
      return
    }
    if (curValue === 0) {
      //   console.log(curArr)
      res.push(curArr)
      return
    }

    // 不选择
    dfs(curValue, curArr, curIndex + 1)
    if (curValue - candidates[curIndex] >= 0) {
      // 选择
      dfs(
        curValue - candidates[curIndex],
        [...curArr, candidates[curIndex]],
        curIndex
      )
    }
  }
  dfs(target, "", 0)
  return res
}
