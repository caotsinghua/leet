/**
 * @param {number[]} nums
 * @return {number}
 */
var massage = function(nums) {
    if(nums.length===0) return 0
    const free=[0]; // 第i天休息
    const work=[nums[0]]; // 第i天工作
    for(let i=1;i<nums.length;i++){
        free[i]=Math.max(free[i-1],work[i-1])
        work[i]=free[i-1]+nums[i]
    }
    return Math.max(free[free.length-1],work[work.length-1])
};