/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function (s) {
  let max = 0
  for (let i = 0; i < s.length; i++) {
    let a = (e = i2 = o = u = 0)

    for (let j = i; j >= 0; j--) {
      switch (s[j]) {
        case "a":
          a ^= 1
          break
        case "e":
          e ^= 1
          break
        case "i":
          i2 ^= 1
          break
        case "o":
          o ^= 1
          break
        case "u":
          u ^= 1
          break
      }
      if ((a | e | i2 | o | u) === 0) {
        max = Math.max(max, i - j + 1)
      }
    }
  }
  return max
}

/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function (s) {
  let max = 0
  const numMap = {}
  let a = (e = i2 = o = u = 0)
    numMap['00000']=0
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "a":
        a ^= 1
        break
      case "e":
        e ^= 1
        break
      case "i":
        i2 ^= 1
        break
      case "o":
        o ^= 1
        break
      case "u":
        u ^= 1
        break
    }
    const key = "" + a + e + i2 + o + u

    if (numMap[key] === undefined) {
      numMap[key] = i+1 // 只存最早的
    } else {
      max = Math.max(max, i - numMap[key] + 1)
    }
  }
  return max
}
console.log(findTheLongestSubstring("eleetminicoworoep"))
