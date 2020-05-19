/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count=1;
    let c=nums[0];
    for(let i=1;i<nums.length;i++){
        if(c!==nums[i]){
            count--;
        }else{
            count++;
        }
        if(count===0){
            c=nums[++i]
            count=1;
        }
    }
    if(count>0){
        return c;
    }else{
        return null
    }
};