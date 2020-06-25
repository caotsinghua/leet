/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let j=nums.length-1
    for(let i=0;i<nums.length;i++){
        if(i>0 && nums[i] === nums[i-1]){
            continue
        }
        while(i<j && nums[i]+nums[j]> target){
            j--
        }
        if(i==j){
            break
        }
        if(nums[i]+nums[j] === target){
            return [nums[i],nums[j]]
        }
    }
    return []
};