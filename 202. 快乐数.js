/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let num=n;
    let has={}
    while(true){
        if(has[num]) return false;
        if(num===1) return true;
        has[num]=true;
        let ps=getPositions(num);
        num=ps.reduce((pre,cur)=>{
            return pre+cur*cur
        },0)
    }
};

function getPositions(n){
    let res=[];
    while(n){
        let tp=n%10;
        res.push(tp)
        n=Math.floor(n/10)
    }
    return res;
}
