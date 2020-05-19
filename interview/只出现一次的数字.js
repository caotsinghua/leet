/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    // let sa=nums.sort()
    // for(let i=0;i<sa.length-1;i+=2){
    //     if(sa[i]!==sa[i+1]){
    //         return sa[i]
    //     }
    // }
    // return sa[sa.length-1]
    // 亦或法
    let res=0;
    for(let i=0;i<nums.length;i++){
        res=res^nums[i]
    }
    return res;
};