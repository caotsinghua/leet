/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysDivByK = function(A, K) {
    let map={}
    let sum=0;
    let res=0;
    map[0]=1;
    for(let i=0;i<A.length;i++){
        sum+=A[i];
        let mod=(sum%K + K) % K

        if(map[mod]!==undefined){
            res+=map[mod]
            map[mod]++;
        }else{
            map[mod]=1;
        }
    }
    return res
};