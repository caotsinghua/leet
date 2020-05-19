/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let total=0;
    let curRest=0;
    let res=0;
    for(let i=0;i<gas.length;i++){
        total+=gas[i]-cost[i]
        curRest+=gas[i]-cost[i]
        if(curRest<0){
            res=i+1; // 重新开始
            curRest=0
        }
    }
    if(total>=0)
    return res
    return -1
};

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let len=gas.length;
    for(let i=0;i<len;i++){
        let total=0;
        let st=i
        for(;st<i+len;st++){
            let curI=st%len;
            total+=gas[curI]-cost[curI]
            if(total<0){
                break;
            }
        }
        if(st===i+len){
            return st%len
        }

    }
    return -1;
};