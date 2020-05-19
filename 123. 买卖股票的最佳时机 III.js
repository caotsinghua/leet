/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let dp=[] // i 天 ，k次操作，是否持有0 无，1 有
    let K=2;
    for(let i=-1;i<prices.length;i++){
       dp[i]=[]
        for(let k=0;k<=K;k++){
            dp[i].push([])
        }
    }
    // 初始化
    for(let k=0;k<=K;k++){
        dp[-1][k][0]=0; // 还没开始的每次操作利润为0
        dp[-1][k][1]=-Infinity; // 还没开始每次操作不可能已经有股票
    }
    for(let i=0;i<prices.length;i++){
        // i天
        // 初始化
        dp[i][0][0]=0; // 没有进行过交易，无股票，利润为0
        dp[i][0][1]=-Infinity; // 不可能持有股票
        for(let k=1;k<=K;k++){
            // 第i天，第k次操作，不持有
            // 来源：之前不持有/之前持有卖出
            dp[i][k][0]=Math.max(dp[i-1][k][0],dp[i-1][k][1]+prices[i])
            // 第i天，第k次操作，持有
            // 来源：之前没有，买入,操作完成一次/之前持有，不动
            dp[i][k][1]=Math.max(dp[i-1][k-1][0]-prices[i],dp[i-1][k][1])
        }
    }
    return dp[prices.length-1][K][0]
};