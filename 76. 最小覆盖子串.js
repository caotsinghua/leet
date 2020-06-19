/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (s.length < t.length || s.length == 0 || t.length == 0) return ""

  // 滑动窗口
  let map = {}
  let resMap = {}
  for (let i = 0; i < t.length; i++) {
    let key = t[i]
    map[key] = 0
    resMap[key] = resMap[key] === undefined ? 1 : resMap[key] + 1
  }
  let distance=0;

  function isValid() {
    for (let i = 0; i < t.length; i++) {
      if (map[t[i]] < resMap[t[i]]) {
        return false
      }
    }
    return true
  }

  let winS = 0
  let winE = 0
  let minLen = Infinity
  let minS = 0

  while (winS <= winE && winE < s.length) {
      const endKey=s[winE]
    if (map[endKey] !== undefined) {

    //   console.log(map[endKey],resMap[endKey])
      if(map[endKey]<resMap[endKey]){
          distance++;
      }
      map[endKey]++
    }
    // console.log(distance)
    while (distance>=t.length && winS <= winE) {
      //   console.log("valid:", s.substring(winS, winE + 1))
      if (winE - winS + 1 < minLen) {
        minLen = winE - winS + 1
        minS = winS
      }
      if (map[s[winS]] !== undefined) {
        if(map[s[winS]]===resMap[s[winS]]){
            distance--;
        }
        map[s[winS]]--

      }
      winS++
    }
    winE++
  }
  if (minLen === Infinity) return ""

  return s.substr(minS, minLen)
}

console.log(minWindow("ADOBECODEBANC", "ABC"))
