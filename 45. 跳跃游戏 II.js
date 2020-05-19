/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    if(nums.length===1) return 0
    let start=0;
    let end=0;
    let res=0;
    while(end<nums.length-1){
        let range=nums[start]; // 能跳的范围
        let maxRange=0;
        for(let i=start;i<=end;i++){
            maxRange=Math.max(maxRange,i+nums[i])
        }
        start=end+1;
        end=maxRange;
        res++;
    }

    return res;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let maxPos=0;
    let end=0;
    let res=0;

    for(let i=0;i<nums.length-1;i++){
        maxPos=Math.max(i+nums[i],maxPos) // 能到达的最远距离
        if(i===end){
            // 到达了之前的最远距离
            res++;
            end=maxPos
        }
    }

    return res;
};
