/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    // (x/2)^2>x^2
    if(x<=1) return x

    let s=0,e=x
    let res=-1;
    while(s<=e){

        let mid=Math.floor((s+e)/2)
        let tmp=mid*mid;
        if(tmp>x){
            e=mid-1;
        }else{
            s=mid+1;
            res=mid;
        }
    }
    return res;

};
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    // (x/2)^2>x^2
    if(x<=1) return x
    let p=Math.pow(10,-9);
    let s=0,e=x
    while(s<e){

        let mid=(s+e+1)/2
        let tmp=mid*mid;
        console.log(s,e,mid)
        if(tmp>x){
            // 不要的值
            e=mid-1;
        }else{
            s=mid;
        }
    }
    return s;

};
// 二分无法得到浮点的值

var mySqrt = function(x) {
    // (x/2)^2>x^2
    if(x<=1) return x
    let p=Math.pow(10,-6)
    let cur=1;
    while(true){
        let pre=cur
        cur=(cur+x/cur)/2;
        console.log(cur,pre)
        if(Math.abs(cur-pre)<=p){
            return cur
        }
    }

};

