/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    if(points.length ===0) return 0
    // 和重叠区间一样
    // 找到所有不重叠的区间即可
    let num = 1
    let index = 0
    points.sort((a,b)=>{
        return a[1] - b[1]
    })
    for(let i=0;i<points.length;i++){
        let end = points[index][1]
        if(points[i][0] <= end){
            // 相交
        }else{
            index = i
            num++
        }
    }
    return num
};