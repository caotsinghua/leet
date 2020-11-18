/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let res = 0
    let start = 0
    let end = 0
    while(end < nums.length-1){
        let maxPos = 0
        for(let i=start;i<=end;i++){
            maxPos = Math.max(maxPos, i+ nums[i])
        }
        end = maxPos
        start++
        res++
        // console.log(res,start,end)
    }
    return res
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let maxPos = 0
    let end = 0
    let res = 0
    for(let i=0;i<nums.length;i++){
        maxPos = Math.max(maxPos,nums[i]+i)
        if(end === i){
            res++
            end = maxPos
            
        }
    }
};