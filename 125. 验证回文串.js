/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  function check(i, j) {
    if (s[i] === s[j]) return true
    let a = ("" + s[i]).toLowerCase()
    let b = ("" + s[j]).toLowerCase()
    return a === b
  }
  // function loop(start,end){
  //     if(start >= end){
  //         return true
  //     }
  //     if(!(/[a-zA-Z0-9]/.test(s[start]))){
  //         return loop(start+1,end)
  //     }
  //     if(!(/[a-zA-Z0-9]/.test(s[end]))){
  //         return loop(start,end-1)
  //     }
  //     if(check(start,end)){
  //         return loop(start+1,end-1)
  //     }
  //     return false
  // }
  // return loop(0,s.length-1)

  for (let i = 0, j = s.length - 1; i < j;) {
    if (!/[a-zA-Z0-9]/.test(s[i])) {
      i++
      continue
    }
    if (!/[a-zA-Z0-9]/.test(s[j])) {
      j--
      continue
    }
    if (!check(i, j)) {
      return false
    }
    i++
    j--
  }
  return true
}
