/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const dps = path.split("/")
  let stack = []
  for (let i = 0; i < dps.length; i++) {
    let c = dps[i]
    if (c === "..") {
      stack.pop()
    } else if (c === "." || !c) {
      continue
    } else {
      stack.push(c)
    }
  }
  let s = stack.join("/")
  return "/" + s
}
