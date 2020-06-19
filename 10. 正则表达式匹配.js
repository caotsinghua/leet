/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    // 合法
    if(s===p) return true;
    if(p==='') return false;

    // dp[i][j]表示前i个p和前j个s是否匹配
    const dp=[]
    for(let i=0;i<p.length;i++){
        dp[i]=[]
    }


};
