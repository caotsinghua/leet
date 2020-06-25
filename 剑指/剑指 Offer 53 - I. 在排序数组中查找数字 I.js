/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let result=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]===target){
            while(nums[i]===target){
                result++
                i++
            }
            return result
           
        }
    }
    return 0
};


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let result=0
    // 二分，找最后个比target小的位置
    let left=0
    let right=nums.length-1
    while(left < right){
        let mid=Math.floor((left+right+1)/2)
        if(nums[mid]>=target){
            right=mid-1
        }else{
            left=mid
        }
    }
    if(nums[left]<target){
        left++ // 找到
    }
    while(nums[left++] === target){
        result++
    }

    return result
};