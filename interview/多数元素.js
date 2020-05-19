/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // nums.sort()
    // return nums[Math.floor(nums.length/2)]
    let count=1;
    let r=nums[0]
    for(let i=1;i<nums.length;i++){
        if(r!==nums[i]){
            count--;
        }else{
            count++;
        }
        if(count===0){
            r=nums[++i]
            count=1
        }
    }
    return count>0?r:null
};