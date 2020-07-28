/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const map = {
    1000: "M",
    500: "D",
    100: "C",
    50: "L",
    10: "X",
    5: "V",
    1: "I",
    400: "CD",
    900: "CM",
    40: "XL",
    90: "XC",
    4: "IV",
    9: "IX",
  }
  const ns = Object.keys(map).sort((a, b) => b - a)
  let res = ""
  while (num) {
    for (let i = 0; i < ns.length; i++) {
      if (num - ns[i] >= 0) {
        res += map[ns[i]]
        num -= ns[i]
        break
      }
    }
  }
  return res
}
