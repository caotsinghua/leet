/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function (arr) {
  let start = 0
  let end = arr.length - 1
  if (start === end) return 0
  if (arr[start] === arr[end]) return 1

  let map = {}
  arr.forEach((n, i) => {
    if (map[n]) {
      map[n].push(i)
    } else {
      map[n] = [i]
    }
  })

  const queue = [0]
  const visited = { 0: true }
  let res = 0
  while (queue.length) {
    let size = queue.length

    while (size--) {
      let curIndex = queue.shift()
      if (curIndex === end) return res
      let pre = curIndex - 1
      let next = curIndex + 1
      if (pre >= 0 && !visited[pre]) {
        queue.push(pre)
        visited[pre] = true
        if (pre === end) return res + 1
      }
      if (next <= end && !visited[next]) {
        queue.push(next)
        visited[next] = true
        if (next === end) return res + 1
      }
      if (map[arr[curIndex]]) {
        //   第三种
        const range = map[arr[curIndex]]
        for (let k = range.length-1; k >=0; k--) {
          if (range[k] === end) return res + 1
          if (range[k] !== curIndex && !visited[range[k]]) {
            queue.push(range[k])
            visited[range[k]] = true
          }
        }
      }
    }
    res++
  }
  return res
}
