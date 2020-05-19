/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let sign=1;
    
    if(dividend>0&&divisor<0) {
        sign=-1;
        divisor=-divisor
    }
    if(dividend<0&&divisor>0){
        dividend=-dividend;
        sign=-1;
    }
    if(dividend<0&&divisor<0){
        dividend=-dividend;
        divisor=-divisor
    }

    const max=Math.pow(2,31)-1;
    const min=-max-1;

    let res=divisor;
    let count=0;
    while(res<=dividend){
        count++;
        res+=divisor;
    }
    res=count*sign;
    if(res>max||res<min) return max;
    return res;
};