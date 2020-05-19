/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
// 12345
var rotateString = function(A, B) {
    if(A===B) return true;
    let result=A;
    for(let i=0;i<A.length;i++){
        result=result.slice(1)+result[0]
        if(result===B)return true
    }
    return false
};