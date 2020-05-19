/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
    function sum(arr){
        return arr.reduce((a,b)=>a+b,0)
    }
    let allsum=sum(A)
    if(allsum%3!==0) return false;
    let ev=allsum/3;
    let sum1=0;
    let i=0;
    for(i=0;i<A.length;i++){
        sum1+=A[i];
        if(sum1===ev){
            i++;
            break;
        }
    }
    // console.log(i,sum1,ev,A.length)
    
    if(i>=A.length-1){
        return false;
    }
    let j=i;
    let sum2=0;
    for(j=i;j<A.length;j++){
        sum2+=A[j]
        if(sum2===ev) {
            j++
            break;
        }
    }
    // console.log(j,sum2,ev,A.length)
    if(j>=A.length){
        return false;
    }
    let sum3=0;
    for(;j<A.length;j++){
        sum3+=A[j];
        if(sum3===ev && j===A.length-1) return true 
    }
    
    return false
};
// console.log("res",canThreePartsEqualSum([18,12,-18,18,-19,-1,10,10]))