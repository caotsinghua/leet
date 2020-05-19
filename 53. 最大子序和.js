/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let dp=[]
    dp[-1]=-Infinity;
    let res=-Infinity;
    for(let i=0;i<nums.length;i++){
        dp[i]=Math.max(dp[i-1]+nums[i],nums[i])
        res=Math.max(res,dp[i])
    }
    return res
};
