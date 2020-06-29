/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const map={}
    let max=0
    for(let i=0;i<nums.length;i++){
        map[nums[i]]=true
        max=Math.max(nums[i],max)
    }
    for(let i=1;i<=max;i++){
        if(!map[i]){
            return i
        }
    }
    return max+1
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
   for(let i=0;i<nums.length;i++){
       if(nums[i]<=0){
           nums[i]=nums.length+1
       }
   }
   for(let i=0;i<nums.length;i++){
       let k=Math.abs(nums[i])
       if(nums[k-1]>0){
           nums[k-1]=-nums[k-1]
       }
   }
   for(let i=0;i<nums.length;i++){
       if(nums[i]>0){
           return i+1
       }
   }
   return nums.length+1

};