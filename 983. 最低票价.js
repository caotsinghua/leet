/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    const dp=[]
    const costNum=3;
    const dates=[1,7,30]
    for(let d=-1;d<days.length;d++){
        dp[d]=[]
        for(let i=0;i<costNum;i++){
            // left,cost
            dp[d][i]=[0,0]
        }
    }

    for(let i=0;i<days.length;i++){
        for(let t=0;t<costNum;t++){
            // left,cost
            if(dp[i-1][t][0] <days[i]){
                let minLeft=0;
                let minCost=Infinity;
                for(let j=0;j<costNum;j++){
                    if(dp[i-1][j][1]<minCost){
                        minCost=dp[i-1][j][1]
                        minLeft=dp[i-1][j][0]
                    }
                }
                dp[i][t][1]=minCost+costs[t] // 使用价格
                dp[i][t][0]=minLeft+dates[t] // 剩余天数
            }
        }
    }
    const n=days.length-1
    const min=Math.min(dp[n][0][1],dp[n][1][1],dp[n][2][1])
    return min
};

var mincostTickets = function(days, costs) {
    const dp=[]
    for(let i=0;i<=365;i++){
        dp[i]=0
    }
    const dates=[1,7,30]
    let t=1;
    for(let i=0;i<days.length;i++){
        let day=days[i];
        while(t<day){
            dp[t]=dp[t-1]
            t++;
        }
        dp[t]=Infinity;
        for(let ticket = 0; ticket < 3; ticket++){
            let start=t-dates[ticket]
            if(start<0) start=0
            dp[t]=Math.min(dp[t],dp[start]+costs[ticket])
        }
        // t=day
        t++;

    }
    // console.log(dp)
    return dp[days[days.length-1]]
};

// 错误，应该是到days[i]天的时候能够旅行
var mincostTickets = function(days, costs) {
    if(days.length===0) return 0;
    days.push(days[days.length-1]+1)

    let minCost=Infinity;
    const dates=[1,7,30]
    const set=new Set(days)

    function dp(day,left,cost){
        if(day===days[days.length-1]){
            minCost=Math.min(minCost,cost)
            return;
        }
        if(set.has(day)){
            // 这一天需要旅行
            if(left===0){
                // 这一天不能旅行
                dp(day+1,dates[0]-1,cost+costs[0])
                dp(day+1,dates[1]-1,cost+costs[1])
                dp(day+1,dates[2]-1,cost+costs[2])
            }else{
                // 这一天可以旅行
                dp(day+1,left-1,cost) // 天数够
            }
        }else{
            dp(day+1,left,cost) // 这天不需要旅行
        }

    }
    dp(1,0,0)
    return minCost;
}


var mincostTickets = function(days, costs) {
    const dates=[1,7,30]
    const memo={}
    const set=new Set(days);

    function dp(day){
        if(day>365){
            return 0;
        }
        if(memo[day]!=null){
            return memo[day]
        }
        if(set.has(day)){
            memo[day]=Math.min(dp(day+dates[0])+costs[0] , dp(day+dates[1])+costs[1] , dp(day+dates[2])+costs[2])
        }else{
            memo[day]=dp(day+1)
        }
        return memo[day]
    }
   return dp(1)

}
