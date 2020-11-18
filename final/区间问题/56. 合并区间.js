/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(intervals.length ===0) return []
    intervals.sort((a,b)=>{
        return a[0] - b[0]
    })
    // 做两件事
    // 1.更新上一个区间的最大值
    // 2.如果间隔，插入新区间，重新1
    const result = []
    result.push(intervals[0])
    for(let i=1;i<intervals.length;i++){
        let inter = intervals[i]
        let last = result[result.length-1]
        if(inter[0] <= last[1]){
            // update,
            last[1] = Math.max(last[1],inter[1])
        }else{
            result.push(inter)
        }
    }
    return result
};