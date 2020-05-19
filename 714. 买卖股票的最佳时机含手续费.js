/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    let dp=[]
    for(let i=-1;i<prices.length;i++){
        dp[i]=[];
    }
    dp[-1][0]=0
    dp[-1][1]=-Infinity
    // 初始化完毕
    for(let i=0;i<prices.length;i++){
        // 不持有
        dp[i][0]=Math.max(dp[i-1][0],dp[i-1][1]+prices[i]-fee)
        // 持有
        dp[i][1]=Math.max(dp[i-1][1],dp[i-1][0]-prices[i])
    }
    return Math.max(dp[prices.length-1][0],dp[prices.length-1][1])

};