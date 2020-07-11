/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
var divingBoard = function(shorter, longer, k) {
    if(k===0) return []
    const res=[]
    let pre=0
    for(let t=k;t>=0;t--){
        let t2=k-t
        let v=shorter*t + t2*longer
        if(pre!==v){
            res.push(v)
            pre=v
        }
    }
    return res

};