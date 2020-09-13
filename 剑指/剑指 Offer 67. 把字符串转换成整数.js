/**
 * @param {string} str
 * @return {number}
 */
var strToInt = function (str) {
  const state = {
    spaced: ["spaced", "num", "sign", "err"],
    num: ["err", "num", "err", "err"],
    sign: ["err", "num", "err", "err"],
  }
  let curState = "spaced"
  let i = 0
  let res = 0
  let signed = 1

  while (i < str.length) {
    let c = str[i]
    let p = 3
    if (c === " ") {
      p = 0
    } else if (c === "+" || c === "-") {
      p = 2
    } else if (Number.isInteger(+c)) {
      p = 1
    } else {
      p = 3
    }

    curState = state[curState][p]
    // console.log(Number.isInteger(+c),curState,p)
    if (curState === "err") {
      return signed * res
    }
    if (curState === "sign") {
      signed = c === "-" ? -1 : 1
    }
    if (curState === "num") {
      res = handleNum(res, +c, signed)
      if (res.length === 10) {
        return signed * res
      }
    }
    i++
  }
  return signed * res
}

function handleNum(pre, c, signed) {
  let INTMIN = "2147483648"
  let INTMAX = "2147483647"
  let INT_PREFIX = 214748364

  if (pre.toString().length === INTMAX.length - 1) {
    if (pre < INT_PREFIX) {
      return pre * 10 + c
    }
    if (pre > INT_PREFIX) {
      return signed === 1 ? INTMAX : INTMIN
    }
    // 前缀相等
    if (signed === 1) {
      if (c >= 7) {
        return INTMAX
      } else {
        return pre * 10 + c
      }
    } else {
      if (c >= 8) {
        return INTMIN
      } else {
        return pre * 10 + c
      }
    }
  }else if(pre.toString().length === INTMAX.length){
    return signed === 1 ? INTMAX : INTMIN
  }
   else {
    return pre * 10 + c
  }
}
