/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
    if(intervals.length ===0) return 0
    intervals = intervals.sort((a,b)=>{
        // console.log(a[0],b[0])
        if(a[0] > b[0]){
            return 1; // 左区间升序
        }else if(a[0] === b[0]){
            // 根据右区间降序
            return a[1] >= b[1] ? -1 : 1
        }else{
            return -1
        }
    })
    // console.log(intervals)

    let res = intervals.length
    let left = intervals[0][0]
    let right = intervals[0][1]

    for(let i=1;i<intervals.length;i++){
        let inter = intervals[i]
        // left 一定小于inter[0]
        if(left <= inter[0] && right >= inter[1]){
            // 覆盖
            res--;
        }else if(right >= inter[0] && right < inter[1]){
            // 交叉
            right = inter[1]
        }else if(right < inter[0]){
            left = inter[0]
            right = inter[1]
        }
    }
    return res;
};