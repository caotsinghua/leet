/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    // base
    if(p===s) return true;
    if(p==='*') return true;
    if(p.length===0 || s.length===0) return false
    

    let dp=[]
    for(let i=0;i<=s.length;i++){
        dp[i]=[];
        for(let j=0;j<=p.length;j++){
            dp[i][j]=false;
        }
    }
    dp[0][0]=true;
    // 对于前0个s，总是false，除非p第一个为*
    for(let j=1;j<=p.length;j++){
        dp[0][j]=p[j-1]==='*'&&dp[0][j-1]
    }

    for(let i=1;i<=s.length;i++){
        for(let j=1;j<=p.length;j++){
            if(p[j-1]==='*'){
                // 忽略或匹配
                dp[i][j]=dp[i][j-1]||dp[i-1][j]
            }else if(p[j-1]==='?'||p[j-1]===s[i-1]){
                dp[i][j]=dp[i-1][j-1]
            }
        }
    }
    return dp[s.length][p.length]
    

};


/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
//    回溯
    let pIndex=0;
    let sIndex=0;
    let pStarIndex=-1;
    let sTmpIndex=-1;
    while(sIndex<s.length){
        if(s[sIndex]===p[pIndex]||p[pIndex]==='?'){
            // 匹配一个
            sIndex++;
            pIndex++;
        }else if(p[pIndex]==='*'){
            // 记录回溯的位置
            // *暂不匹配
            pStarIndex=pIndex;
            sTmpIndex=sIndex;
            pIndex++;
        }else if(pStarIndex===-1){
            // 前面没有可回溯的*
            return false
        }else {
            // p定位到之前星号+1
            pIndex=pStarIndex+1;
            // s位置+1，代表*匹配一个
            sIndex=sTmpIndex+1;
            sTmpIndex=sIndex;
        }
    }
    
    while(pIndex<p.length){
        if(p[pIndex++]!=='*'){
            return false
        }
    }
    return true

};