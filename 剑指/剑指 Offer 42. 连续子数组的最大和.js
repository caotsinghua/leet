/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxRes=nums[0]
    let cur=nums[0]
    for(let i=1;i<nums.length;i++){
        cur=Math.max(nums[i],nums[i]+cur)
        maxRes=Math.max(maxRes,cur)
    }
    return maxRes
};