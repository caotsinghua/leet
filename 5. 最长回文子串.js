/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(!s || s.length===1) return s;

    const dp=[]
    let c=s.length;
    let res=[];
    let maxlen=0;
    while(c>0){
        dp.push([])
        c--;
    }
    // dp[i][j]=dp[i+1][j-1] && si==sj
    // 1
    for(let i=0;i<s.length;i++){
        dp[i][i]=true;
        if(maxlen===0){
            res=[i,i];
            maxlen=1;
        }
    }
    // 2
    for(let i=0;i<=s.length-2;i++){
        dp[i][i+1]=s[i]===s[i+1]
        if(dp[i][i+1]){
            res=[i,i+1]
            maxlen=2;
        }
    }
    // 3
    for(let j=2;j<s.length;j++){
        for(let i=0;i<=j-2;i++){
            if(i+1<=s.length-1 && j-1>=0){
                dp[i][j]=dp[i+1][j-1] && (s[i]===s[j])
                if(dp[i][j] && j-i+1>maxlen){
                    res=[i,j];
                    maxlen=j-i+1;
                }
            }
        }
    }

    const [start]=res;
    return s.substr(start,maxlen)
};
