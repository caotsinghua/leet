/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function (words) {
  const res = []
  for (let i = 0; i < words.length - 1; i++) {
    for (let j = i + 1; j < words.length; j++) {
      let s1 = words[i] + words[j]
      if (is(s1)) {
        res.push([i, j])
      }
      let s2 = words[j] + words[i]
      if (is(s2)) {
        res.push([j, i])
      }
    }
  }
  return res
}

function is(s) {
  let r = s.length - 1
  let l = 0
  while (l < r) {
    if (s[l] === s[r]) {
      l++
      r--
    } else {
      return false
    }
  }
  return true
}
