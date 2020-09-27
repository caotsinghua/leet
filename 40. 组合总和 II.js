/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const visited = []
  let res = []
  let map = {}
  candidates.sort((a, b) => a - b)
  function loop(temp, resValue, curIndex) {
    if (visited[curIndex]) return
    if (resValue === 0) {
      let key = temp.join("-")
      if (!map[key]) {
        res.push(temp)
        map[key] = true
      }
      return
    }
    if (curIndex >= candidates.length) return
    // 选中
    if (resValue - candidates[curIndex] >= 0) {
      visited[curIndex] = true
      loop(
        [...temp, candidates[curIndex]],
        resValue - candidates[curIndex],
        curIndex + 1
      )
      visited[curIndex] = false
    }
    // 不选
    loop(temp, resValue, curIndex + 1)
  }
  loop([], target, 0)
  return res
}

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let res = []
  let countMap = []
  candidates.sort((a, b) => a - b)
  let i = 0
  let map = {}
  candidates.forEach((v) => {
    if (map[v] == undefined) {
      map[v] = i++
      countMap[map[v]] = [v, 1]
    } else {
      countMap[map[v]][1]++
    }
  })

  function loop(temp, resValue, curIndex) {
    if (resValue === 0) {
      res.push(temp)
      return
    }

    if (curIndex >= countMap.length || resValue < countMap[curIndex][0]) return
    // 不选
    loop([...temp], resValue, curIndex + 1)

    let [v, ct] = countMap[curIndex]
    let most = Math.min(ct, Math.floor(resValue / v)) // v出现几次

    let ctemp = []
    for (let i = 1; i <= most; i++) {
      ctemp.push(v)
      loop([...temp, ...ctemp], resValue - i * v, curIndex + 1)
    }
  }
  loop([], target, 0)
  return res
}
