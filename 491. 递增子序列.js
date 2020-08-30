/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  let len = nums.length
  let tmp = []
  function getSubStr(mask) {
    tmp = []
    for (let i = 0; i < len; i++) {
      if (mask & 1) {
        tmp.push(nums[i])
      }
      mask = mask >> 1
    }
    return tmp
  }
  function check(tmp) {
    for (let i = 1; i < tmp.length; i++) {
      if (tmp[i] < tmp[i - 1]) {
        return false
      }
    }
    return tmp.length >= 2
  }
  const mod = Math.pow(10, 9) + 7
  function getHash(tmp) {
    let hash = 0
    let base = 201

    tmp.forEach((v) => {
      hash = ((hash * base) % mod) + (v + 101)
      hash %= mod
    })
    return hash
  }
  const map = {}
  let res = []
  // 000011
  for (let i = 0; i < Math.pow(2, len); i++) {
    const subs = getSubStr(i)
    // console.log(subs)
    const hash = getHash(subs)
    //   检查子序列是否合法
    if (check(subs) && !map[hash]) {
      map[hash] = true
      res.push(subs)
    }
  }
  return res
}
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  const res = []
  const len = nums.length
  const tmp = []

  dfs(0, -1)
  return res

  function dfs(curIndex, lastIndex) {
    if (curIndex === len) {
      if (tmp.length >= 2) {
        res.push([...tmp])
      }
      return
    }
    if (lastIndex < 0 || nums[curIndex] >= nums[lastIndex]) {
      // continue
      tmp.push(nums[curIndex])
      dfs(curIndex + 1, curIndex) // 选择当前的
      tmp.pop()
      //  不选择当前数字
    }
    if (nums[curIndex] !== nums[lastIndex]) {
      // 当两个数一样时，只选择前一个
      // 因此只有前后不同才走到这里
      dfs(curIndex + 1, lastIndex)
    }
  }
}
