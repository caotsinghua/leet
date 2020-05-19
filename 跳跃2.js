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
        let maxEnd=-1;
        for(let i=start;i<=end;i++){
            maxEnd=Math.max(maxEnd,i+nums[i])
        }
        start=end+1;
        end=maxEnd;
        res++;
    }
    return res;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let res=0;
    let maxPos=0;
    let end=0;
    for(let i=0;i<nums.length-1;i++){
        maxPos=Math.max(maxPos,i+nums[i])
        if(i===end){
            console.log(maxPos)
            // 到达最远距离
            res++;
            end=maxPos;
        }

    }
    return res;
};


var jump = function(nums) {
    let start=0;
    let end=0;

};
