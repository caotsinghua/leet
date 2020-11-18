/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    // 首先按照end升序
    // 取得第一个end最小的
    // 把所有与该区间相交的去掉
    // 重新开始
    if(intervals.length === 0) return 0
    intervals.sort((a,b)=>{
        return a[1] - b[1]
    })
    let index = 0
    let num = 1
    for(let i=1;i<intervals.length;i++){
        let [s,e] = intervals[index]
        // 去除与end相交的
        if(intervals[i][0] < e){
            continue
        }else{
            // 不相交
            index = i
            num++
        }
    }
    return intervals.length - num
};