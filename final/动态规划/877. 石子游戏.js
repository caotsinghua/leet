/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
    let dp=[]
    // base case
    piles.forEach((_,i)=>{
        dp[i]=[]
        for(let j=0;j<piles.length;j++){
            dp[i][j] = {}
        }
        dp[i][i] = {
            one:piles[i],
            two:0
        }
    })

    // 
    for(let t=1;t<=piles.length-1;t++){
        for(let i=0;i<piles.length-t;i++){
            let j = i + t
            // console.log([i,j])
            // 先手的选择
            let choseLeft = piles[i] + dp[i+1][j].two
            let choseRight = piles[j] + dp[i][j-1].two
            if(choseLeft > choseRight){
                dp[i][j].one = choseLeft
                dp[i][j].two = dp[i+1][j].one // 对于后手来说，i+1 ~ j就是先手
            }else{
                dp[i][j].one = choseRight
                dp[i][j].two = dp[i][j-1].one
            }
        }
    }
    // console.log(dp)
    let res = dp[0][piles.length-1]
    let oneRes = res.one - res.two
    // 先手赢，则为正数
    return oneRes > 0
};