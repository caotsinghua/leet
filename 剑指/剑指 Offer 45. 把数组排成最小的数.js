/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function (nums) {
  let arr = nums.sort((a, b) => check(a, b))
  let result = arr.reduce((a,b)=>a+b,'')
  return result
}

function check(a, b) {
  let n1 = Number("" + a + b)
  let n2 = Number("" + b + a)
  if(n1 > n2){
      return 1
  }
  if(n1 < n2) {
      return -1
  }
  return 0
}
