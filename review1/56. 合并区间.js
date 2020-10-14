/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const merged = []
  intervals.sort((a, b) => {
    return a[0] - b[0]
  })

//   console.log(intervals)
  for (let i = 0; i < intervals.length; i++) {
    const prev = merged.pop()
    if (!prev) {
      merged.push(intervals[i])
    } else {
      const cur = intervals[i]
      const pp = j(prev, cur)
      //   console.log(pp)
      
      if (pp) {
        merged.push(pp)
      } else {
        merged.push(prev)
        merged.push(cur)
      }
    }
  }
  return merged
}

function j(a, b) {
  const [a0, a1] = a
  const [b0, b1] = b
  if (a0 > b1 || a1 < b0) return false
  return [Math.min(a0, b0), Math.max(a1, b1)]
}
