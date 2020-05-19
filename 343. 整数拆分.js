/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    // dp[i]=2*max(dp[i-2],i-2)
    const dp=[];
    dp[1]=1;
    dp[2]=1;
    dp[3]=2;
    for(let i=4;i<=n;i++){
        let mid=Math.floor(i/2);
        let max=-1;
        for(let k=mid;k>=2;k--){
            max=Math.max(max,k*Math.max(dp[i-k],i-k))
        }
        dp[i]=max;
    }
    return dp[n]
};
