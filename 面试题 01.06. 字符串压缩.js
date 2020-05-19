/**
 * @param {string} S
 * @return {string}
 */
var compressString = function(S) {
    let result=''
    let count=1;
    let ch=S[0]
    for(let i=1;i<S.length;i++){
        if(S[i]===ch){
            count++;
        }else{
            result+=`${ch}${count}`
            count=1;
            ch=S[i]
        }
    }
    result+=`${ch}${count}`
    if(result.length>=S.length){
        return S
    }else{
        return result
    }
};