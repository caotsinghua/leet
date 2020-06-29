/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  const map = {}
  let temp = 0
  let res = 0
  map[0] = 0
  for (let i = 0; i < nums.length; i++) {
    temp += nums[i]

  }
}

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
    let start=0
    let end=0
    let tempSum=0
    let minLen=nums.length+1
    while(end < nums.length){
        while(tempSum<s && end <nums.length){
            tempSum+=nums[end]
            end++
        }
        // update
        minLen=Math.min(end-start+1,minLen)
        while(tempSum >=s && start<=end){
            tempSum-=nums[start]
            start++
        }
        minLen=Math.min(end-start+1,minLen)

    }
    return minLen===nums.length+1?0:minLen
  }
  
  
  
