/**
 * @param {number} n
 * @return {number}
 */
var numWays = function(n) {
    if(n===0) return 1
    if(n===1) return 1
    if(n===2) return 2
    let a=1
    let b=2
    for(let i=3;i<=n;i++){
        let t=a
        a=b%1000000007
        b=(t+b)%1000000007
    }
    return b
};