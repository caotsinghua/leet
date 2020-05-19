/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length===0) return 0
    const sell=[]; // 空仓
    const hold=[];// 持仓
    const freeze=[]; // 冷冻
    let len=prices.length;
    for(let i=0;i<len;i++){
        sell[i]=0;
        hold[i]=0;
        freeze[i]=0;
    }
    hold[0]=-prices[0] // 第一天买入
    for(let i=1;i<len;i++){
        // 第一天不能卖出
        sell[i]=hold[i-1]+prices[i] // 卖出
        hold[i]=Math.max(freeze[i-1]-prices[i],hold[i-1]) // 继续持仓：买入/不做(问题：i-2天如果是买入，不能持续买入，所以freeze的来源是前一天卖出/freeze)
        freeze[i]=Math.max(sell[i-1],freeze[i-1]) // 最后一次冻结，前一天卖出
    }
    return Math.max(sell[len-1],freeze[len-1])
};

maxProfit([1,2,3,0,2])