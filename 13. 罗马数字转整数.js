/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  }
  let sum = 0
  for (let i = 0; i < s.length; i++) {
    
    let two = s[i] + ( s[i + 1] || "")
    let one = s[i]
    // console.log(one,two)
    if (map[two]) {
      sum += map[two]
      i++
    } else {
      sum += map[one]
    }
  }
  return sum
}
