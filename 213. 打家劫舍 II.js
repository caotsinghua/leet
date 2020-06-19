/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length===0) return 0
    if(nums.length===1) return nums[0]
    let sum1=getRob(nums.slice(0,nums.length-1))
    let sum2=getRob(nums.slice(1))
    return Math.max(sum1,sum2)
};

function getRob(nums){
    if(nums.length===0) return 0
    if(nums.length===1) return nums[0]
    let dp=[]
    dp[0]=nums[0]
    dp[1]=Math.max(nums[0],nums[1])

    for(let i=2;i<nums.length;i++){
        dp[i]=Math.max(dp[i-1],dp[i-2]+nums[i])
    }
    return dp[nums.length-1]
}