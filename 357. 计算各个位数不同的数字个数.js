/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
    let dp=[];
    dp[0]=1;
    for(let i=1;i<=n;i++){
        // dp=dp[i-1]+9*9*8,..1
         let d0=9;
         let c=i-1;
         let tp=d0;
         while(c--){
            tp*=d0;
            d0--;
         }
         dp[i]=dp[i-1]+tp;
    }
    return dp[n]
};
