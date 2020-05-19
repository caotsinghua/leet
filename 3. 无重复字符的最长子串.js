/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map={}
    let maxRes=0;
    let start=0;
    let end=0;
    for(start=0;start<s.length;start++){
        // 每次循环
        if(start>0){
            //
            delete map[s[start-1]]
        }
        while(end<s.length){
            if(!map[s[end]]){
                map[s[end]]=true;
                end++;
            }else{
                // 以存在
                break;
            }
        }
        // 这里end处在重复字符的位置
        maxRes=Math.max(maxRes,end-start)
    }
    return maxRes;
};
