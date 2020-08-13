/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 == 0 || num2 == 0) return '0'
  num1 = num1.split("").reverse()
  num2 = num2.split("").reverse()
  let another = 0
  let addsArr = []
  for (let i = 0; i < num2.length; i++) {
    let n2 = num2[i] - 0
    let up = 0 // 进位
    let tmp = []
    let k = 0
    for (let t = 0; t < another; t++) {
      tmp[k++] = 0 // 补0
    }
    another++
    for (let j = 0; j < num1.length; j++) {
      let n1 = num1[j] - 0
      let cur = (n1 * n2 + up) % 10
      tmp[k++] = cur
      up = Math.floor((n1 * n2 + up) / 10)
    }
    if (up > 0) {
      tmp[k] = up
    }
    addsArr.push(tmp)
  }

//   console.log(addsArr)
  let res = addsArr.reduce((a, b) => add(a, b), 0)
  return res.reverse().join('')
}

function add(a, b) {
  if (b == 0) return a
  if (a == 0) return b
  let up = 0
  let len = Math.max(a.length, b.length)
  let res = []
  let k = 0
  for (let i = 0; i < len; i++) {
    let n1 = a[i] || 0
    let n2 = b[i] || 0
    let cur = (n1 + n2 + up) % 10
    up = Math.floor((n1 + n2 + up) / 10)
    res[k++] = cur
  }
  if (up > 0) {
    res[k] = up
  }
  return res
}
