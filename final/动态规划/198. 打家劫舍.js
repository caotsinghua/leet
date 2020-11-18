/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let dp=[]
    
    for(let i=0;i<=nums.length;i++){
        dp[i]=[0,0]
    }

    for(let i=1;i<=nums.length;i++){
        dp[i][0] = Math.max(dp[i-1][0],dp[i-1][1])
        dp[i][1]=dp[i-1][0] + nums[i-1]
    }
    return Math.max(dp[nums.length][0],dp[nums.length][1])
};