/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let dp=[];
    nums.forEach((item,i)=>dp[i]=1)
    for(let i=0;i<nums.length;i++){
        let max=-Infinity;
        let maxIndex=i;
        for(let j=0;j<i;j++){
            if(nums[j]<nums[i] && dp[j]>max){
                max=dp[j];
                maxIndex=j;
            }
        }
        if(maxIndex<i){
            dp[i]=dp[maxIndex]+1
        }
    }
    let result=dp[0]
    for(let i=0;i<dp.length;i++){
        if(result<dp[i]){
            result=dp[i]
        }
    }
    return result||0

};