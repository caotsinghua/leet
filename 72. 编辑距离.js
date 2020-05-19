/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const dp=[] // 前i个w1到前j个w2的编辑距离
    for(let i =0;i<=word1.length;i++){
        dp[i]=[]
    }
    dp[0][0]=0; // 空字符编辑距离为a
    // basecase，
    for(let i=1;i<=word1.length;i++){
        dp[i][0]=i;
    }
    for(let j=1;j<=word2.length;j++){
        dp[0][j]=j;
    }

    for(let i=1;i<=word1.length;i++){
        for(let j=1;j<=word2.length;j++){
            if(word1[i-1]===word2[j-1]){
                // 第i个和第j个字符相等，不需要替换
                dp[i][j]=1+Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1]-1)
            }else{
                dp[i][j]=1+Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1])
            }
        }
    }
    return dp[word1.length][word2.length]
};