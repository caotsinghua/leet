/**
 * @param {number[]} A
 * @return {number}
 */
var maxScoreSightseeingPair = function(A) {
    // 每次保存两个，和当前的比较
    let [v1,v2]=[A[0],A[1]]
    let [idx1,idx2]=[0,1]
    let preMax=v1+v2+idx1-idx2
    for(let i=2;i<A.length;i++){
        let cur=A[i]
        let s1=v1+cur+idx1-i;
        let s2=v2+cur+idx2-i;
        if(preMax>=s1 && preMax>=s2){
            // 不变
            continue
        }
        if(s2 > preMax && s2>s1){
            // 替换v1
           v1=v2
           idx1=idx2
           v2=cur
           idx2=i
           preMax=v1+v2+idx1-idx2
           continue
        }
         if(s1 > preMax && s1>s2){
            //替换v2
            [v2,idx2]=[cur,i]
            preMax=v1+v2+idx1-idx2
            continue
        }
        // console.log(v1,v2,idx1,idx2)
       
    }
    return preMax
};

var maxScoreSightseeingPair = function(A) {

    // A[i]+i A[j]-j
    let preMax=A[0]
    let res=-Infinity
    for(let i=1;i<A.length;i++){
        res=Math.max(preMax+A[i]-i,res)
        preMax=Math.max(preMax,A[i]+i)
    }
    return res
}