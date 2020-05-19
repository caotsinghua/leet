/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    let has={}
    function getPow(x,m){
        if(m===0) return 1
        if(m===1) return x;
        let mid=Math.floor(m/2)
        if(has[mid]!==undefined){
            return has[mid]
        }
        let half=getPow(x,mid)
        if((m&1)===0){
            // 偶
            return has[mid]=half*half
        }else{
            return has[mid]=half*half*x;
        }
    }
    if(n<0) {
        return getPow(1/x,-n)
    } else{
        return getPow(x,n)
    }

};
