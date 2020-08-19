/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let map={
        ')':'(',
        ']':'[',
        '}':'{'
    }
    let stack=[]
    for(let i=0;i<s.length;i++){
        let c = s[i]
        if(c==='('||c==='['||c==='{'){
            stack.push(c)
        }else{
            let p = stack.pop()
            if(p!==map[c]){
                return false
            }
        }
    }
    return stack.length ===0
};