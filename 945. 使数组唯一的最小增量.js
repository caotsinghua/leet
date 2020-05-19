/**
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function(A) {
    const timesMap={}
    let result=0
    for(let i=0;i<A.length;i++){
        if(timesMap[A[i]]){
            timesMap[A[i]]++
        }else{
            timesMap[A[i]]=1
        }
    }
    let token=0;
    
    for(let i=0;i<80000;i++){
        if(timesMap[i]>=2){
            token+=timesMap[i]-1
            result-=i*(timesMap[i]-1)

        }else if(token>0&& !timesMap[i]){
            token--
            result+=i;
        }
    }

    return result
    
};

/**
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function(A) {
    A.sort()
    let res=0;
    for(let i=1;i<A.length;i++){
        if(A[i]<=A[i-1]){
            res+=(A[i-1]-A[i]+1)
            A[i]=A[i-1]+1
            
        }
    }
    return res;
};