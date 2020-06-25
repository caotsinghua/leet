/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
    const map={}
    const dicts=[]
    for(let i=0;i<s.length;i++){
        if(map[s[i]]){
            map[s[i]]++
        }else{
            map[s[i]]=1
            dicts.push(s[i])
        }
    }
    for(let i=0;i<dicts.length;i++){
        if(map[dicts[i]] === 1){
            return dicts[i]
        }
    }
    return ' '
};