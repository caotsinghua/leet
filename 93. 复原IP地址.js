/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  let segs = []
  let len = s.length
  let res = []
  function dfs(id, start) {
    if (id == 4 && start === len) {
      res.push(segs.join("."))
      return
    }
    if (id >= 4) {
      return
    }
    if (start >= len) {
      return
    }

    if (s[start] == 0) {
      segs[id] = 0
      return dfs(id + 1, start + 1)
    }
    let add = 0
    for (let i = start; i < len; i++) {
      add = add * 10 + Number(s[i])
      if (add > 0xff || add <= 0) {
        return
      } else {
        segs[id] = add
        dfs(id + 1, i + 1)
      }
    }
  }
  dfs(0, 0)
  return res
}
