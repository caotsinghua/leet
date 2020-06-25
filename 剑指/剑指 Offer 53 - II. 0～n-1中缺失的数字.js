/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) {
      return i
    }
  }
  return nums.length
}

// 二分找第一个缺失的数字

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let left =0,right=nums.length-1
    while(left <= right){
        let mid=Math.floor((left+right)/2)
        if(nums[mid]===mid){
            left=mid+1
        }else{
            right=mid-1
        }
    }
    return left
}
