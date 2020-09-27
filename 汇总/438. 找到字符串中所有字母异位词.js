/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  if (s.length < p.length) return []
  const targetCount = {}
  for (let i = 0; i < p.length; i++) {
    if (targetCount[p[i]] == null) {
      targetCount[p[i]] = 1
    } else {
      targetCount[p[i]]++
    }
  }

  let left = 0,
    right = 0
  let originMap = {}
  while (right < p.length) {
    let c = s[right]

    if (originMap[c] == null) {
      originMap[c] = 1
    } else {
      originMap[c]++
    }
    right++
  }
  let res = []
  // check
  while (right <= s.length) {
    // console.log(originMap)
    if (check()) {
      res.push(left)
    }
    originMap[s[left]]--
    left++

    if (originMap[s[right]] == null) {
      originMap[s[right]] = 1
    } else {
      originMap[s[right]]++
    }
    right++
  }

  function check() {
    for (let k in targetCount) {
      if (targetCount[k] !== originMap[k]) {
        return false
      }
    }
    return true
  }
  return res
}
