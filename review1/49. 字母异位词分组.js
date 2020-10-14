/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const a = 97
  const map = {}
  strs.forEach((s) => {
    let k = []
    for(let i=0;i<26;i++){
        k[i]=0
    }
    for (let i = 0; i < s.length; i++) {
        k[s[i].charCodeAt(0) - a]++
    }
   
    
    // console.log(k)
    if (map[k]) {
      map[k].push(s)
    } else {
      map[k] = [s]
    }
  })
  return Object.values(map)
}
