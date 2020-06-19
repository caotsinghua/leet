/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let dp=[]
    for(let i=0;i<nums.length;i++){
        dp[i]=[0,0]
    }
    dp[-1]=[0,0]

    for(let i=0;i<nums.length;i++){
        // i天不偷
        dp[i][0]=Math.max(dp[i-1][1],dp[i-1][0])
        // i天偷
        dp[i][1]=dp[i-1][0]+nums[i]
    }
    return Math.max(dp[nums.length-1][0],dp[nums.length-1][1])
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length===0) return 0
    if(nums.length===1) return nums[0]
    let dp=[]
    dp[0]=nums[0]
    dp[1]=Math.max(nums[0],nums[1])

    for(let i=2;i<nums.length;i++){
        dp[i]=Math.max(dp[i-1],dp[i-2]+nums[i])
    }
    return dp[nums.length-1]
};