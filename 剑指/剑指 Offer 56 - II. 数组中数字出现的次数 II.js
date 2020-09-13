/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let bit = Array(32).fill(0)
  
  nums.forEach((n) => {
    let b = 1
    for (let i = 31; i >= 0; i--) {
      if ((n & b)) {
        bit[i] = bit[i] ? bit[i] + 1 : 1
      }
      b = b << 1
    }
  })
//   console.log(bit)
  let res = 0
  for (let i = 0; i < bit.length; i++) {
    let k = bit[i] === undefined ? 0 : bit[i]
    res = res << 1
    res += k % 3
  }
  return res
}
