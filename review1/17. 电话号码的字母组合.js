/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  }
  let res = []
  function loop(temps, left) {
    if (left.length === 0) {
      temps && res.push(temps)
      return
    }
    let c = left[0]
    let _left = left.substring(1)
    let chs = map[c]
    for (let i = 0; i < chs.length; i++) {
      loop(temps + chs[i], _left)
    }
  }
  loop("", digits)
  return res
}

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  }

  let pre = []
  let temp = []
  for (let i = 0; i < digits.length; i++) {
    let chs = map[digits[i]]
    if (pre.length === 0) {
      pre = chs.split("")
    } else {
      for (let j = 0; j < chs.length; j++) {
        pre.forEach((p) => {
          temp.push(p + chs[j])
        })
      }
      pre=temp
      temp=[]
    }
  }
  return pre
}
