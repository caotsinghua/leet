/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let res = []
  function loop(temp, arr) {
    if (arr.length === 0) {
      res.push(temp)
      return
    }
    for (let i = 0; i < arr.length; i++) {
      let left = arr.filter((d) => d !== arr[i])
      loop([...temp, arr[i]],left)
    }
  }
  loop([],nums)
  return res
}
