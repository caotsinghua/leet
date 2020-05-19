/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack=[]
    const map={
        '[':']',
        '{':'}',
        '(':')'
    }
    for(let i=0;i<s.length;i++){
        let cur=s[i]
        if(map[cur]){
            stack.push(cur)
        }else{
            const p=stack.pop()
            if(cur!==map[p]){
                return false
            }
        }
    }
    return stack.length===0
};