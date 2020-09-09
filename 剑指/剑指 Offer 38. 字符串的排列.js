/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
  let visited = []
  let res = []
  function dfs(str = "", i) {
    let c = s[i]
    visited[i] = true
    str = str + c

    if (str.length === s.length) {
      res.push(str)
      visited[i] = false
      return
    }

    for (let i = 0; i < s.length; i++) {
      if (!visited[i]) {
        // console.log(str, i)
        dfs(str, i)
      }
    }
    visited[i] = false
  }

  for (let i = 0; i < s.length; i++) {
    dfs("", i)
  }
  return Array.from(new Set(res))
}
