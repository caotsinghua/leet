/**
 * @param {number} n
 * @return {number}
 */
var waysToChange = function(n) {
    const coins=[25,10,5,1]
    let f=[];
    for(let i=0;i<=n;i++){
        f[i]=0;
    }
    f[0]=1;

    const m=1000000007;
    for(let c=0;c<4;c++){
        let coin=coins[c];
        for(let j=coin;j<=n;j++){
            f[j]=(f[j]+f[j-coin])%m;
        }
    }
    return f[n]
};
