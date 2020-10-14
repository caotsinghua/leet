/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  const states = {
    start: ["start", "signed", "in", "end"],
    signed: ["end", "end", "in", "end"],
    in: ["end", "end", "in", "end"],
    end: ["end", "end", "end", "end"],
  }
  const zMax = 2147483648
  // ' ' 0
  // +/- 1
  // number 2
  // other 3
  function getIndex(c) {
    if (c === " ") {
      return 0
    }
    if (c === "+" || c === "-") {
      return 1
    }
    if (!Number.isNaN(c - 0)) {
      return 2
    }
    return 3
  }
  let state = "start"
  let sum = 0
  let signed = 1
  let result = 0

  for (let i = 0; i < str.length; i++) {
    let c = str[i]
    state = states[state][getIndex(c)]
    // console.log(c, state)
    if (state === "end") {
      return result
    }
    if (state === "in") {
      // 计数
      if (sum > Math.floor(zMax / 10)) {
        if (signed === 1) {
          return zMax - 1
        } else {
          return signed * zMax
        }
      } else if (sum === Math.floor(zMax / 10)) {
        if (signed === 1) {
          if (c - 0 > 7) {
            return zMax - 1
          } else {
            sum = sum * 10 + (c - 0)
            result = signed * sum
          }
        } else {
          if (c - 0 > 8) {
            return signed * zMax
          } else {
            sum = sum * 10 + (c - 0)
            result = signed * sum
          }
        }
      } else {
        sum = sum * 10 + (c - 0)
        result = signed * sum
      }
    }
    if (state === "signed") {
      signed = c === "-" ? -1 : 1
    }
    if (state === "end") {
      result = signed * sum
      return result
    }
  }
  return result
}
