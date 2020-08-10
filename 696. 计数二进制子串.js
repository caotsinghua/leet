/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
  const map = {}
  let arr = []
  for (let i = 0; i < s.length; i++) {
    arr[i] = s[i] == 0 ? -1 : 1
  }
  console.log(arr)
  let sum = 0
  let res = 0
  map[0] = [-1]
  for (let i = 0; i < s.length; i++) {
    sum += arr[i]
    if (map[sum] == null) {
      map[sum] = [i]
    } else {
      map[sum].push(i)
    }
    let target = sum
    console.log(target)
    if (map[target] != null) {
      res += map[target].length
    }
  }
  return res
}

/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
  let arr = []
  let tmp = 0
  let k = 0

  for (let i = 0; i < s.length; i++) {
    if (i === 0) {
      tmp = 1
      arr[k] = 1
      continue
    }
    if (s[i] !== s[i - 1]) {
      arr[k++] = tmp
      tmp = 1
    } else {
      tmp++
    }
  }
  if (tmp > 0) {
    arr[k] = tmp
  }
  //   console.log(arr)
  let res = 0

  for (let i = 0; i < arr.length; i++) {
    if (i < arr.length - 1) {
      res += Math.min(arr[i], arr[i + 1])
      //   console.log(res)
    }
  }
  return res
}
