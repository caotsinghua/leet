/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const map={}
    for(let i=0;i<s.length;i++){
        if(map[s[i]]!==undefined){
            map[s[i]]++
        }else{
            map[s[i]]=1
        }
    }
    let res=0;
    let hasji=0;
    Object.values(map).forEach(value=>{
        if(value%2===0){
            res+=value
        }else{
           res+=(value-1)
           hasji=1
        }
    })
    return res+hasji
};