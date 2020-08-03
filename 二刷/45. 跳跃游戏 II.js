/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let start = 0 // 开始点
  let end = 0 // 结束点
  let n=0
  while (end < nums.length-1) {
    let maxPos = 0
    for (let i = start; i <= end; i++) {
      maxPos = Math.max(maxPos, i + nums[i])
    }
    start = end + 1
    end = maxPos
    // console.log(end)
    n++
  }
  return n
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let maxpos = 0
    let res=0
    for(let i=0;i<nums.length;i++){
        maxpos = Math.max(maxpos,i+nums[i])
        if(maxpos === i){
            res++
        }
    }
  }
  