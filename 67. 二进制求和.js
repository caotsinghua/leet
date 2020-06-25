/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let res = []
  let as = a.split("").reverse()
  let bs = b.split("").reverse()

  let carry = 0
  let pos = 0
  const len = Math.max(as.length, bs.length)

  for (let i = 0; i < len; i++) {
    carry += i < as.length ? as[i] - 0 : 0
    carry += i < bs.length ? bs[i] - 0 : 0
    res[pos++] = carry % 2
    carry = Math.floor(carry / 2)
  }
  if(carry){
      res[pos++]=1
  }
  res.reverse()
  return res.joi n('')
}
