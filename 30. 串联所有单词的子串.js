/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  if (words.length === 0 || s.length === 0) return []
  const originMap = {}
  const wSize = words[0].length
  const sSize = words.length * wSize
  const result = []
  words.forEach((k) => {
    if (originMap[k]) {
      originMap[k]++
    } else {
      originMap[k] = 1
    }
  })
  for (let i = 0; i < s.length; i++) {
    let temps = ""
    let c = 0
    let startI = i
    while (c < sSize) {
      temps += s[i + c]
      c++
    }
    i = i + sSize - 1

    console.log(temps)
    // 取得一个字串
    let countMap = {}

    for (let k = 0; k < sSize; k++) {
      let t = 0
      let tp = ""
      while (t < wSize) {
        tp += temps[k + t]
        t++
      }
      k = k + t - 1
      if (!countMap[tp]) {
        countMap[tp] = 1
      } else {
        countMap[tp]++
      }
    }

    let j = 0
    for (j = 0; j < words.length; j++) {
      if (countMap[words[j]] !== originMap[words[j]]) {
        break
      }
    }
    if (j === words.length) {
      result.push(startI)
    }
  }
  return result
}

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  if (words.length === 0 || s.length === 0) return []
  const originMap = {}
  const wSize = words[0].length
  const sSize = words.length * wSize
  const result = []
  words.forEach((k) => {
    if (originMap[k]) {
      originMap[k]++
    } else {
      originMap[k] = 1
    }
  })

  for (let i = 0; i < s.length; i++) {
    let j = i + sSize
    const tempStr = s.substring(i, j)
    let countMap = {}

    for (let k = 0; k < tempStr.length; k+=wSize) {
      let k2 = k + wSize
      let ks = tempStr.substring(k, k2)
      if (countMap[ks]) {
        countMap[ks]++
      } else {
        countMap[ks] = 1
      }
    }
    // console.log(countMap,originMap,tempStr)
    // is same?
    for (j = 0; j < words.length; j++) {
      if (countMap[words[j]] !== originMap[words[j]]) {
        break
      }
    }

    if (j === words.length) {
      result.push(i)
    }
  }

  return result
}
